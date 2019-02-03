import { EmissionInput } from "../../types/input";
import { EmissionUnits } from "../../types/result";

export function getDeforestationEmission(input: Partial<EmissionInput>): EmissionUnits {
    return {
        emission_gCO2e: 0
    };
};