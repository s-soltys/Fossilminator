import { FossilUsageParams, FossilUsageResult } from "../../fossil-usage";

export enum Section {
    None = 'NONE',
    Welcome = 'WELCOME',
    Transport = 'TRANSPORT'
}

export interface NavigationState {
    section: Section;
}

export type FossilUsageState = FossilUsageParams;
export type FossilEmissionState = FossilUsageResult;

export interface AppState {
    navigation: NavigationState;
    fossilUsage: FossilUsageState;
    fossilEmission: FossilEmissionState;
}