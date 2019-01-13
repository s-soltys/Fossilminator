import { EmissionInput } from "../../types/input";
import { EmissionResultDetails } from "../../types/result";

export function getAirConditioningEmission(input: Partial<EmissionInput>): EmissionResultDetails {
    return {
        co2Emission: 0
    };
};