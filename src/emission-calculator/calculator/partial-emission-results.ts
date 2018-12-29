import { EmissionInput } from "../types/input";
import { EmissionResultField } from "../types/result";
import { FoodEmissionParams, WeeksPerYear, TransportEmissionParams } from "../constants";
import { getHousingConstructionEmission } from "./partial-results/partial-housing-construction";
import { getHousingHeatingEmission } from "./partial-results/partial-housing-heating";
import { getWarmWaterEmission } from "./partial-results/partial-warm-water";
import { getAirConditioningEmission } from "./partial-results/partial-air-conditioning";

export type PartialResultCalculatorMap = {
    [key in EmissionResultField]: (input: EmissionInput) => number;
};

export const PartialEmissionResult: PartialResultCalculatorMap = {
    housingConstruction: getHousingConstructionEmission,
    housingHeating: getHousingHeatingEmission,
    warmWater: getWarmWaterEmission,
    airConditioning: getAirConditioningEmission,
    fuelForTransport: ({ transport }) => {
        return transport.carKmPerWeek * WeeksPerYear * TransportEmissionParams.perKmOfCarTravel;
    },
    carConstuction: (input) => {
        return 0.9;
    },
    publicTransport: (input) => {
        return 1.2;
    },
    airTravel: ({ transport }) => {
        return transport.annualHoursInAir * TransportEmissionParams.perAnnualHourInAir;
    },

    foodProduction: ({ food }) => {
        return food.meatPerWeek * FoodEmissionParams.perMeatDailyMeatConsumption;
    },
    consumption: (input) => {
        return 2.6;
    },
    electricity: (input) => {
        return 1.1;
    },
    deforestation: (input) => {
        return 0.5;
    },
    commonServices: (input) => {
        return 3.5;
    },

    totalAnnualEmission: undefined
};