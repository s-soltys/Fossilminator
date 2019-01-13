import { EmissionInput } from "../../types/input";
import { EmissionResultDetails } from "../../types/result";

export function getHousingHeatingEmission(input: Partial<EmissionInput>): EmissionResultDetails {
    return {
        co2Emission: 0
    };
};