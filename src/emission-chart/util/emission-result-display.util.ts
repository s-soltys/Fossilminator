import { EmissionUnits } from "../../emission-calculator";

const gPerTonne = 1000 * 1000;

export function emissionResultValue(units: EmissionUnits, displayType?: any): number {
    switch (displayType) {
        default: {
            return (units.emission_gCO2e || 0) / gPerTonne;
        }
    }
}

export function emissionResultLabel(units: EmissionUnits, displayType?: any): string {
    const value = emissionResultValue(units, displayType);
    return value.toFixed(2);
}