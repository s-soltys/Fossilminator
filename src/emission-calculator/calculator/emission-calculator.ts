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
        result: food + transport,


        housingConstruction: 0.5,
        housingHeating: 2.0,
        warmWater: 1.0,
        airConditioning: 0.1,
        fuelForTransport: 1.0,
        carConstuction: 0.2,
        publicTransport: 1.0,
        airTravel: 6.0,

        foodProduction: 3.0,
        consumption: 1.0,
        electricity: 0.6,
        deforestation: 0.2,
        commonServices: 3.1,

        totalAnnualEmission: 10 + food + transport
    };
};