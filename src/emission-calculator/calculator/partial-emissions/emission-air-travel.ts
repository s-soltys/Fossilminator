import { EmissionInput, PlaneClass } from "../../types/input";
import { EmissionResultDetails } from "../../types/result";

const emissionPerAnnualHourInAir = 0.3;
const longDistanceEmissionModifier = 1.2;

export function getAirTravelEmission({ publicTransport }: Partial<EmissionInput>): EmissionResultDetails {
    const classMultiplier = getPlaneClassMultiplier(publicTransport.airClass);

    const shortDistEmissions =
        publicTransport.shortDistanceAirTravelAnnualHours * emissionPerAnnualHourInAir;

    const longDistEmissions =
        publicTransport.longDistanceAirTravelAnnualHours * emissionPerAnnualHourInAir * longDistanceEmissionModifier;

    const result = classMultiplier * (shortDistEmissions + longDistEmissions);

    return {
        co2Emission: result
    };
}

function getPlaneClassMultiplier(planeClass: PlaneClass) {
    switch (planeClass) {
        case PlaneClass.First:
            return 1.5;
        case PlaneClass.Business:
            return 1.2;
        default:
            return 1.0;
    }
}
