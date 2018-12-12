import { FossilUsageParams } from "./types/fossil-usage-input.interface";
import { FossilUsageResult } from "./types/fossil-usage-result.interface";

const WEEKS_PER_YEAR = 52;
const CO2_EMISSION_PER_KM = 0.001;

export function calculateUsage(input: FossilUsageParams): FossilUsageResult {
    const consumption = 5;
    const transport = input.transport.carKmPerWeek * WEEKS_PER_YEAR * CO2_EMISSION_PER_KM;

    return {
        consumption,
        transport,
        result: consumption + transport
    };
};