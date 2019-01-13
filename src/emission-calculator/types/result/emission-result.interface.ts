import { EmissionUnits } from "./emission-units.interface";

export interface EmissionResult {
    housingConstruction: EmissionUnits;
    housingHeating: EmissionUnits;
    warmWater: EmissionUnits;
    airConditioning: EmissionUnits;
    fuelForTransport: EmissionUnits;
    carConstuction: EmissionUnits;
    publicTransport: EmissionUnits;
    airTravel: EmissionUnits;

    foodProduction: EmissionUnits;
    consumption: EmissionUnits;
    electricity: EmissionUnits;
    deforestation: EmissionUnits;
    commonServices: EmissionUnits;

    totalAnnualEmission: EmissionUnits;
}

export type EmissionResultField = keyof EmissionResult; 