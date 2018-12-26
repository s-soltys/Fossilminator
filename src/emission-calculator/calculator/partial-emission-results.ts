import { EmissionInput } from "../types/input";
import { EmissionResultField } from "../types/result";
import { FoodEmissionParams, WeeksPerYear, TransportEmissionParams } from "../constants";

type PartialEmissionResult = {
    [key in EmissionResultField]: (input: EmissionInput) => number;
};

export const PartialEmissionResult: PartialEmissionResult = {
    housingConstruction: (input) => {
        return 0;
    },
    housingHeating: (input) => {
        return 0;
    },
    warmWater: (input) => {
        return 0;
    },
    airConditioning: (input) => {
        return 0;
    },
    fuelForTransport: ({ transport }) => {
        return transport.carKmPerWeek * WeeksPerYear * TransportEmissionParams.perKmOfCarTravel;
    },
    carConstuction: (input) => {
        return 0;
    },
    publicTransport: (input) => {
        return 0;
    },
    airTravel: ({ transport }) => {
        return transport.annualHoursInAir * TransportEmissionParams.perAnnualHourInAir;
    },

    foodProduction: ({ food }) => {
        return food.meatPerWeek * FoodEmissionParams.perMeatDailyMeatConsumption;
    },
    consumption: (input) => {
        return 0;
    },
    electricity: (input) => {
        return 0;
    },
    deforestation: (input) => {
        return 0;
    },
    commonServices: (input) => {
        return 0;
    },

    totalAnnualEmission: undefined
};