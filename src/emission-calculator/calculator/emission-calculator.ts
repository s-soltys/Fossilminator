import { EmissionInput } from "../types/input";
import { EmissionResult } from "../types/result";
import { WeeksPerYear } from "../constants";
import { FoodEmissionParams, TransportEmissionParams } from "../constants";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    const food = input.food.meatPerWeek * FoodEmissionParams.perMeatDailyMeatConsumption;

    const transport = input.transport.carKmPerWeek * WeeksPerYear * TransportEmissionParams.perKmOfCarTravel
        + input.transport.annualHoursInAir * TransportEmissionParams.perAnnualHourInAir;

    return {
        housingConstruction: 0.5,
        housingHeating: 2.0,
        warmWater: 1.0,
        airConditioning: 0.1,
        fuelForTransport: 1.0,
        carConstuction: 0.2,
        publicTransport: transport,
        airTravel: 6.0,

        foodProduction: food,
        consumption: 1.0,
        electricity: 0.6,
        deforestation: 0.2,
        commonServices: 3.1,

        totalAnnualEmission: 10 + food + transport
    };
};