import { EmissionInput } from "../types/input";
import { EmissionResult } from "../types/result";
import { PartialEmissionResult } from "./partial-emission-results";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    const partialResults = Object.keys(PartialEmissionResult).reduce((result, key) => {
        const fn = PartialEmissionResult[key];
        const value = fn ? fn(input) : 0;
        return { ...result, [key]: value };
    }, {}) as EmissionResult;

    const totalAnnualEmission = Object.keys(partialResults).reduce((sum, key) => sum + partialResults[key], 0);
    
    const resultWithTotal = {
        ...partialResults,
        totalAnnualEmission
    };

    return resultWithTotal;
};