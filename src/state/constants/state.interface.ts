import { EmissionInput, EmissionResult } from "../../emission-calculator";

export enum Section {
    Country = 'COUNTRY',
    Housing = 'HOUSING',
    Water = 'WATER',
    PublicTransport = 'PUBLIC_TRANSPORT',
    PrivateTransport = 'PRIVATE_TRANSPORT',
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
    fossilUsage: EmissionInputState;
    fossilEmission: EmissionResultState;
}