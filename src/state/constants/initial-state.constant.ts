import { AppState, Section } from "./state.interface";

export const InitialAppState: AppState = {
    navigation: {
        section: Section.Housing
    },
    emissionInput: {
        country: {
            countryCode: 'pl',
            energeticMix: {
                coal: 0,
                nuclear: 0,
                solar: 0,
                water: 0,
                wind: 0
            }
        },
        transport: {
            carKmPerWeek: null,
            annualHoursInAir: null
        },
        publicTransport: {} as any,
        privateTransport: {} as any,
        housing: {} as any,
        water: {} as any,
        consumption: {} as any,
        food: {
            meatPerWeek: 1
        } as any
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