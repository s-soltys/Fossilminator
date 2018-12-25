import { EmissionInput } from "../input/emission-input.interface";
import { EmissionResult } from "../result/emission-result.interface";

const WEEKS_PER_YEAR = 52;

const EmissionConversion = {
    perMeatDailyMeatConsumption: 2,
    perKmOfCarTravel: 0.001,
    perAnnualHourInAir: 0.3,
}

export function calculateFossilEmissions(input: EmissionInput): EmissionResult {
    const food = input.food.meatPerWeek * EmissionConversion.perMeatDailyMeatConsumption;

    const transport = input.transport.carKmPerWeek * WEEKS_PER_YEAR * EmissionConversion.perKmOfCarTravel
        + input.transport.annualHoursInAir * EmissionConversion.perAnnualHourInAir;

    return {
        food,
        transport,
        result: food + transport
    };
};