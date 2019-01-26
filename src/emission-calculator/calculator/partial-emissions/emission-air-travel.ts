import { EmissionInput } from "../../types/input";
import { EmissionUnits } from "../../types/result";

interface AirTravelParams {
    flightEnergy_MJ_km: number;
    infMaintenanceEnergy_MJ_km: number;
    averageSpeed_km_h: number;
    highAltitudeEmissionMultiplier: number;
    airFuelEmission_gCO2e_MJ: number;
    infMaintenanceEmission_gCO2e_MJ: number;
}

const longDistanceParams: AirTravelParams = {
    flightEnergy_MJ_km: 1.5,
    infMaintenanceEnergy_MJ_km: 0.6,
    averageSpeed_km_h: 800,
    highAltitudeEmissionMultiplier: 2.7,
    airFuelEmission_gCO2e_MJ: 77,
    infMaintenanceEmission_gCO2e_MJ: 70
};

const shortDistanceParams: AirTravelParams = {
    flightEnergy_MJ_km: 2.0,
    infMaintenanceEnergy_MJ_km: 1.7,
    averageSpeed_km_h: 800,
    highAltitudeEmissionMultiplier: 2.7,
    airFuelEmission_gCO2e_MJ: 77,
    infMaintenanceEmission_gCO2e_MJ: 70
};


export function getAirTravelEmission({ publicTransport }: Partial<EmissionInput>): EmissionUnits {
    const shortTravelRes = getEmissionResultForAirTravelType(publicTransport.shortDistanceAirTravelAnnualHours, shortDistanceParams);
    const longTravelRes = getEmissionResultForAirTravelType(publicTransport.longDistanceAirTravelAnnualHours, longDistanceParams);

    return {
        emission_gCO2e: shortTravelRes.totalEmission_gCO2e + longTravelRes.totalEmission_gCO2e,
        energy_MJ: shortTravelRes.totalEnergy_MJ + longTravelRes.totalEnergy_MJ
    };
}

function getEmissionResultForAirTravelType(annualHoursInAir_h: number, params: AirTravelParams) {
    const distance_km = annualHoursInAir_h * params.averageSpeed_km_h;

    const flightEnergy_MJ = distance_km * params.flightEnergy_MJ_km;
    const flightEmission_gCO2e = params.airFuelEmission_gCO2e_MJ * flightEnergy_MJ * params.highAltitudeEmissionMultiplier;

    const infMaintenanceEnergy_MJ = distance_km * params.infMaintenanceEnergy_MJ_km;
    const infMaintenanceEmission_gCO2e = params.infMaintenanceEmission_gCO2e_MJ * infMaintenanceEnergy_MJ * params.highAltitudeEmissionMultiplier;

    const totalEnergy_MJ = flightEnergy_MJ + infMaintenanceEnergy_MJ;
    const totalEmission_gCO2e = flightEmission_gCO2e + infMaintenanceEmission_gCO2e;

    return {
        totalEnergy_MJ,
        totalEmission_gCO2e
    }
}