import { AppState, Section } from "./state.interface";

export const InitialAppState: AppState = {
    navigation: {
        section: Section.Welcome
    },
    fossilUsage: {
        transport: {
            carKmPerWeek: 0,
            annualHoursInAir: 0
        },
        food: {
            meatPerWeek: 1
        }
    },
    fossilEmission: {
        food: 0,
        transport: 0,
        result: 0
    }
}