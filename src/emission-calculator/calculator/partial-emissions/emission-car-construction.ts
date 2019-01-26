import { EmissionInput } from "../../types/input";
import { EmissionUnits } from "../../types/result";

export function getCarConstructionEmission(input: Partial<EmissionInput>): EmissionUnits {
    return {
        emission_gCO2e: 0
    };
};