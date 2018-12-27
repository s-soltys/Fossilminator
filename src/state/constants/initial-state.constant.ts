import { AppState, Section } from "./state.interface";

export const InitialAppState: AppState = {
    navigation: {
        section: Section.Housing
    },
    emissionInput: {
        country: {
            countryCode: 'pl'
        },
        transport: {
            carKmPerWeek: null,
            annualHoursInAir: null
        },
        food: {
            meatPerWeek: 1
        }
    },
    emissionResult: {
        housingConstruction: 0,
        housingHeating: 0,
        warmWater: 0,
        airConditioning: 0,
        fuelForTransport: 0,
        carConstuction: 0,
        publicTransport: 0,
        airTravel: 0,
        foodProduction: 0,
        consumption: 0,
        electricity: 0,
        deforestation: 0,
        commonServices: 0,
        totalAnnualEmission: 0
    }
}