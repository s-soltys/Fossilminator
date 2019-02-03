import { EmissionInput } from "../types/input";
import { EmissionResult, EmissionResultPartialFields, EmissionUnits } from "../types/result";
import { PartialResultCalculatorMap } from "./partial-emission-results";
import { EmptyEmissionUnits } from "../constants";

export function calculateEmissionResultsWithPartials(input: EmissionInput, partialResultCalculatorMap: PartialResultCalculatorMap) {
    const partialResults = getPartialResults(input, partialResultCalculatorMap);

    const totalAnnualEmission = getTotalResult(partialResults);

    const resultWithTotal = { ...partialResults, totalAnnualEmission };

    return resultWithTotal;
}

export function getPartialResults(input: EmissionInput, partialResultCalculatorMap: PartialResultCalculatorMap): EmissionResult {
    return EmissionResultPartialFields.reduce((result, key) => {
        const fn = partialResultCalculatorMap[key];
        const value = fn ? fn(input) : EmptyEmissionUnits;
        return { ...result, [key]: value };
    }, {}) as EmissionResult;
}

export function getTotalResult(result: EmissionResult): EmissionUnits {
    return EmissionResultPartialFields.reduce((sum, key) => {
        return combineEmissionResult(sum, result[key] || EmptyEmissionUnits);
    }, EmptyEmissionUnits);
}

export function combineEmissionResult(a: EmissionUnits, b: EmissionUnits): EmissionUnits {
    const result: EmissionUnits = {
        emission_gCO2e: (a.emission_gCO2e || 0) + (b.emission_gCO2e || 0)
    };

    return result;
}