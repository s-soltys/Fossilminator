import { EmissionInput } from "../types/input";
import { EmissionResult } from "../types/result";
import { PartialEmissionResult } from "./partial-emission-results";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    const data = Object.keys(PartialEmissionResult).reduce((result, key) => {
        const fn = PartialEmissionResult[key];
        const value = fn ? fn(input) : 0;
        return { ...result, [key]: value };
    }, {});

    const totalAnnualEmission = Object.keys(data).reduce((sum, key) => sum + data[key], 0);
    
    const resultWithTotal = {
        ...data,
        totalAnnualEmission
    };

    return resultWithTotal as any;
};