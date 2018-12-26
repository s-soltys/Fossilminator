export interface EmissionResult {
    housingConstruction: number;
    housingHeating: number;
    warmWater: number;
    airConditioning: number;
    fuelForTransport: number;
    carConstuction: number;
    publicTransport: number;
    airTravel: number;

    foodProduction: number;
    consumption: number;
    electricity: number;
    deforestation: number;
    commonServices: number;

    totalAnnualEmission: number;
}

export type EmissionResultField = keyof EmissionResult; 