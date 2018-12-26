import { EmissionInput } from "../types/input";
import { EmissionResultField } from "../types/result";
import { FoodEmissionParams, WeeksPerYear, TransportEmissionParams } from "../constants";

type PartialEmissionResult = {
    [key in EmissionResultField]: (input: EmissionInput) => number;
};

export const PartialEmissionResult: PartialEmissionResult = {
    housingConstruction: (input) => {
        return 0.2;
    },
    housingHeating: (input) => {
        return 0.5;
    },
    warmWater: (input) => {
        return 1.25;
    },
    airConditioning: (input) => {
        return 0.12;
    },
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