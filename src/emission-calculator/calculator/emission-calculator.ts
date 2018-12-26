import { EmissionInput } from "../types/input";
import { EmissionResult, EmissionResultPartialFields } from "../types/result";
import { PartialResultCalculatorMap, PartialEmissionResult } from "./partial-emission-results";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    return calculateEmissionResultsWithPartials(input, PartialEmissionResult);
}

export function calculateEmissionResultsWithPartials(input: EmissionInput, partialResultCalculatorMap: PartialResultCalculatorMap) {
    const partialResults = getPartialResults(input, partialResultCalculatorMap);

    const totalAnnualEmission = getTotalResult(partialResults);
    
    const resultWithTotal = { ...partialResults, totalAnnualEmission };

    return resultWithTotal;
}

export function getPartialResults(input: EmissionInput, partialResultCalculatorMap: PartialResultCalculatorMap): EmissionResult {
    return EmissionResultPartialFields.reduce((result, key) => {
        const fn = partialResultCalculatorMap[key];
        const value = fn ? fn(input) : 0;
        return { ...result, [key]: value };
    }, {}) as EmissionResult;
}

export function getTotalResult(result: EmissionResult): number {
    return EmissionResultPartialFields.reduce((sum, key) => sum + (result[key] || 0), 0);
}