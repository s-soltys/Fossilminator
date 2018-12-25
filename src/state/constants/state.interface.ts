import { EmissionInput, EmissionResult } from "../../emission-calculator";

export enum Section {
    Country = 'COUNTRY',
    Housing = 'HOUSING',
    WaterAndAirConditioning = 'WATER_AND_AIR_CONDITIONING',
    PrivateTransport = 'PRIVATE_TRANSPORT',
    PublicTransport = 'PUBLIC_TRANSPORT',
    Food = 'FOOD',
    Consumption = 'CONSUMPTION',
    EmissionResults = 'EMISSION_RESULTS'
}

export interface NavigationState {
    section: Section;
}

export type EmissionInputState = EmissionInput;
export type EmissionResultState = EmissionResult;

export interface AppState {
    navigation: NavigationState;
    emissionInput: EmissionInputState;
    emissionResult: EmissionResultState;
}