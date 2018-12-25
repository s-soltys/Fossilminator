import { EmissionInput, EmissionResult } from "../../emission-calculator";

export enum Section {
    None = 'NONE',
    Welcome = 'WELCOME',
    Transport = 'TRANSPORT'
}

export interface NavigationState {
    section: Section;
}

export type FossilUsageState = EmissionInput;
export type FossilEmissionState = EmissionResult;

export interface AppState {
    navigation: NavigationState;
    fossilUsage: FossilUsageState;
    fossilEmission: FossilEmissionState;
}