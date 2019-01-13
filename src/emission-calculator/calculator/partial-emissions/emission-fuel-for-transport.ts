import { EmissionInput } from "../../types/input";
import { EmissionUnits } from "../../types/result";

export function getFuelForTransportEmission(input: Partial<EmissionInput>): EmissionUnits {
    return {
        co2Emission: 0
    };
};