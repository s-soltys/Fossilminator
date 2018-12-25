import { EmissionInput } from "../input/emission-input.interface";
import { EmissionResult } from "../result/emission-result.interface";
import { WeeksPerYear } from "../constants";
import { FoodEmissionParams, TransportEmissionParams } from "../constants";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    const food = input.food.meatPerWeek * FoodEmissionParams.perMeatDailyMeatConsumption;

    const transport = input.transport.carKmPerWeek * WeeksPerYear * TransportEmissionParams.perKmOfCarTravel
        + input.transport.annualHoursInAir * TransportEmissionParams.perAnnualHourInAir;

    return {
        food,
        transport,
        result: food + transport
    };
};