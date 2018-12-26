import { EmissionInput } from "../types/input";
import { EmissionResult } from "../types/result";
import { PartialEmissionResult } from "./partial-emission-results";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    return {
        housingConstruction: 0.5,
        housingHeating: 2.0,
        warmWater: 1.0,
        airConditioning: 0.1,
        fuelForTransport: PartialEmissionResult.fuelForTransport(input),
        carConstuction: 0.2,
        publicTransport: 0,
        airTravel: PartialEmissionResult.airTravel(input),

        foodProduction: PartialEmissionResult.foodProduction(input),
        consumption: 1.0,
        electricity: 0.6,
        deforestation: 0.2,
        commonServices: 3.1,

        totalAnnualEmission: 10
    };
};