import { EmissionInput, PlaneClass } from "../../types/input";

const emissionPerAnnualHourInAir = 0.3;

export function getAirTravelEmission({ publicTransport }: EmissionInput) {
    const classMultiplier = getPlanceClassMultiplier(publicTransport.airClass);

    const shortDistEmissions =
        publicTransport.shortDistanceAirTravelAnnualHours *
        emissionPerAnnualHourInAir;

    const longDistEmissions =
        publicTransport.longDistanceAirTravelAnnualHours *
        emissionPerAnnualHourInAir;

    const result = classMultiplier * (shortDistEmissions + longDistEmissions);

    return result;
}

function getPlanceClassMultiplier(planeClass: PlaneClass) {
    switch (planeClass) {
        case PlaneClass.First:
            return 1.5;
        case PlaneClass.Business:
            return 1.2;
        default:
            return 1.0;
    }
}
