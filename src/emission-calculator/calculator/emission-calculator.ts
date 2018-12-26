import { EmissionInput } from "../types/input";
import { EmissionResult, EmissionResultPartialFields } from "../types/result";
import { PartialEmissionResult } from "./partial-emission-results";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    const partialResults = EmissionResultPartialFields.reduce((result, key) => {
        const fn = PartialEmissionResult[key];
        const value = fn ? fn(input) : 0;
        return { ...result, [key]: value };
    }, {}) as EmissionResult;

    const totalAnnualEmission = EmissionResultPartialFields.reduce((sum, key) => sum + partialResults[key], 0);
    
    const resultWithTotal = {
        ...partialResults,
        totalAnnualEmission
    };

    return resultWithTotal;
};