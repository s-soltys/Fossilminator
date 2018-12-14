import { FossilUsageParams } from "./types/fossil-usage-input.interface";
import { FossilUsageResult } from "./types/fossil-usage-result.interface";

const WEEKS_PER_YEAR = 52;

const EmissionConversion = {
    perMeatDailyMeatConsumption: 1,
    perKmOfCarTravel: 0.001,
    perAnnualHourInAir: 0.05,
}

export function calculateFossilEmissions(input: FossilUsageParams): FossilUsageResult {
    const food = input.food.meatPerWeek * EmissionConversion.perMeatDailyMeatConsumption;

    const transport = input.transport.carKmPerWeek * WEEKS_PER_YEAR * EmissionConversion.perKmOfCarTravel
        + input.transport.annualHoursInAir * EmissionConversion.perAnnualHourInAir;

    return {
        food,
        transport,
        result: food + transport
    };
};