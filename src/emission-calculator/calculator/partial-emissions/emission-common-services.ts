import { EmissionInput } from "../../types/input";
import { EmissionUnits } from "../../types/result";

export function getCommonServicesEmission(input: Partial<EmissionInput>): EmissionUnits {
    return {
        emission_gCO2e: 0
    };
};