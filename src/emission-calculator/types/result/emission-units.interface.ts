export interface EmissionUnits {
    emission_gCO2e: number;
    energy_MJ?: number;
}

export type EmissionUnitsField = keyof EmissionUnits; 