import { AppState, Section } from "./state.interface";
import { EmptyEmissionInput, EmptyEmissionUnits } from "../../emission-calculator/constants";

export const InitialAppState: AppState = {
    navigation: {
        section: Section.PublicTransport
    },
    emissionInput: EmptyEmissionInput,
    emissionResult: {
        housingConstruction: EmptyEmissionUnits,
        housingHeating: EmptyEmissionUnits,
        warmWater: EmptyEmissionUnits,
        airConditioning: EmptyEmissionUnits,
        fuelForTransport: EmptyEmissionUnits,
        carConstuction: EmptyEmissionUnits,
        publicTransport: EmptyEmissionUnits,
        airTravel: EmptyEmissionUnits,
        foodProduction: EmptyEmissionUnits,
        consumption: EmptyEmissionUnits,
        electricity: EmptyEmissionUnits,
        deforestation: EmptyEmissionUnits,
        commonServices: EmptyEmissionUnits,
        totalAnnualEmission: EmptyEmissionUnits
    }
}