import { AppState, Section } from "./state.interface";

export const InitialAppState: AppState = {
    navigation: {
        section: Section.Housing
    },
    emissionInput: {
        transport: {
            carKmPerWeek: null,
            annualHoursInAir: null
        },
        food: {
            meatPerWeek: 1
        }
    },
    emissionResult: {
        food: 0,
        transport: 0,
        result: 0
    } as any
}