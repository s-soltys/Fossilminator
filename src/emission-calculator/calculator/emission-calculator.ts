import { EmissionInput } from "../types/input";
import { EmissionResult, EmissionResultPartialFields } from "../types/result";
import { PartialEmissionResult } from "./partial-emission-results";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    const partialResults = getPartialResults(input);

    const totalAnnualEmission = getTotalResult(partialResults);
    
    const resultWithTotal = { ...partialResults, totalAnnualEmission };

    return resultWithTotal;
}

function getPartialResults(input: EmissionInput): EmissionResult {
    return EmissionResultPartialFields.reduce((result, key) => {
        const fn = PartialEmissionResult[key];
        const value = fn ? fn(input) : 0;
        return { ...result, [key]: value };
    }, {}) as EmissionResult;
}

function getTotalResult(result: EmissionResult): number {
    return EmissionResultPartialFields.reduce((sum, key) => sum + result[key], 0);
}