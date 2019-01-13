import { EmissionResultDetails } from "./emission-result-details.interface";

export interface EmissionResult {
    housingConstruction: EmissionResultDetails;
    housingHeating: EmissionResultDetails;
    warmWater: EmissionResultDetails;
    airConditioning: EmissionResultDetails;
    fuelForTransport: EmissionResultDetails;
    carConstuction: EmissionResultDetails;
    publicTransport: EmissionResultDetails;
    airTravel: EmissionResultDetails;

    foodProduction: EmissionResultDetails;
    consumption: EmissionResultDetails;
    electricity: EmissionResultDetails;
    deforestation: EmissionResultDetails;
    commonServices: EmissionResultDetails;

    totalAnnualEmission: EmissionResultDetails;
}

export type EmissionResultField = keyof EmissionResult; 