import { EmissionInput, PlaneClass } from "../../types/input";
import { EmissionUnits } from "../../types/result";


interface AirTravelParams {
    flightEnergy_MJ_pkm: number;
    infMaintenanceEnergy_MJ_pkm: number;
    averageSpeed_km_h: number;
    highAltitudeEmissionMultiplier: number;
    airFuelEmission_g_MJ: number;
    infMaintenanceEmission_g_MJ: number;
}

const longDistanceParams: AirTravelParams = {
    flightEnergy_MJ_pkm: 1.5,
    infMaintenanceEnergy_MJ_pkm: 0.6,
    averageSpeed_km_h: 800,
    highAltitudeEmissionMultiplier: 2.7,
    airFuelEmission_g_MJ: 77,
    infMaintenanceEmission_g_MJ: 70
};

const shortDistanceParams: AirTravelParams = {
    flightEnergy_MJ_pkm: 2.0,
    infMaintenanceEnergy_MJ_pkm: 1.7,
    averageSpeed_km_h: 800,
    highAltitudeEmissionMultiplier: 2.7,
    airFuelEmission_g_MJ: 77,
    infMaintenanceEmission_g_MJ: 70
};


export function getAirTravelEmission({ publicTransport }: Partial<EmissionInput>): EmissionUnits {
    const shortTravelEmission = getEmissionResultForAirTravelType(publicTransport.shortDistanceAirTravelAnnualHours, shortDistanceParams);
    const longTravelEmission = getEmissionResultForAirTravelType(publicTransport.longDistanceAirTravelAnnualHours, longDistanceParams);

    return {
        emission_gCO2e: shortTravelEmission.totalEmission_gCO2e + longTravelEmission.totalEmission_gCO2e
    };
}

function getEmissionResultForAirTravelType(annualHoursInAir_h: number, params: AirTravelParams) {
    const distance_km = annualHoursInAir_h * params.averageSpeed_km_h;

    const flightEnergy_MJ = distance_km * params.flightEnergy_MJ_pkm;
    const flightEmission_gCO2e = params.airFuelEmission_g_MJ * flightEnergy_MJ * params.highAltitudeEmissionMultiplier;

    const infMaintenanceEnergy_MJ = distance_km * params.infMaintenanceEnergy_MJ_pkm;
    const infMaintenanceEmission_gCO2e = params.infMaintenanceEmission_g_MJ * infMaintenanceEnergy_MJ * params.highAltitudeEmissionMultiplier;

    const totalEnergy_MJ = flightEnergy_MJ + infMaintenanceEnergy_MJ;
    const totalEmission_gCO2e = flightEmission_gCO2e + infMaintenanceEmission_gCO2e;

    return {
        totalEnergy_MJ,
        totalEmission_gCO2e
    }
}