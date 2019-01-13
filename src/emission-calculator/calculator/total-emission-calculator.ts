import { EmissionInput } from "../types/input";
import { EmissionResult, EmissionResultPartialFields, EmissionResultDetails } from "../types/result";
import { PartialResultCalculatorMap } from "./partial-emission-results";
import { EmptyEmissionResultDetails } from "../constants/empty-emission-result-details.constant";

export function calculateEmissionResultsWithPartials(input: EmissionInput, partialResultCalculatorMap: PartialResultCalculatorMap) {
    const partialResults = getPartialResults(input, partialResultCalculatorMap);

    const totalAnnualEmission = getTotalResult(partialResults);

    const resultWithTotal = { ...partialResults, totalAnnualEmission };

    return resultWithTotal;
}

export function getPartialResults(input: EmissionInput, partialResultCalculatorMap: PartialResultCalculatorMap): EmissionResult {
    return EmissionResultPartialFields.reduce((result, key) => {
        const fn = partialResultCalculatorMap[key];
        const value = fn ? fn(input) : EmptyEmissionResultDetails;
        return { ...result, [key]: value };
    }, {}) as EmissionResult;
}

export function getTotalResult(result: EmissionResult): EmissionResultDetails {
    return EmissionResultPartialFields.reduce((sum, key) => {
        return combineEmissionResult(sum, result[key] || EmptyEmissionResultDetails);
    }, EmptyEmissionResultDetails);
}

export function combineEmissionResult(a: EmissionResultDetails, b: EmissionResultDetails): EmissionResultDetails {
    const result: EmissionResultDetails = {
        co2Emission: (a.co2Emission || 0) + (b.co2Emission || 0)
    };

    return result;
}