import { FossilUsageParams } from "./types/fossil-usage-input.interface";
import { FossilUsageResult } from "./types/fossil-usage-result.interface";

const WEEKS_PER_YEAR = 52;

const EmissionConversion = {
    emissionPerKmOfCarTravel: 0.001,
}

export function calculateFossilEmissions(input: FossilUsageParams): FossilUsageResult {
    const food = 5;
    const transport = input.transport.carKmPerWeek * WEEKS_PER_YEAR * EmissionConversion.emissionPerKmOfCarTravel;

    return {
        food,
        transport,
        result: food + transport
    };
};