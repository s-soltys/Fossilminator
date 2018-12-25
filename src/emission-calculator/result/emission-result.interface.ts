export interface EmissionResult {
    food: number;
    transport: number;
    result: number;

    housingConstruction?: number;
    housingHeating?: number;
    warmWater?: number;
    airConditioning?: number;
    fuelForTransport?: number;
    carConstuction?: number;
    publicTransport?: number;
    airTravel?: number;

    foodProduction?: number;
    consumption?: number;
    electricity?: number;
    deforestation?: number;
    commonServices?: number;

    totalAnnualCo2?: number;
}