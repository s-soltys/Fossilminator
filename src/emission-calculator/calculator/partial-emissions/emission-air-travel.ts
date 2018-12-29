import { EmissionInput } from "../../types/input";
import { TransportEmissionParams } from "../../constants";

export function getAirTravelEmission({ transport }: EmissionInput) {
    return transport.annualHoursInAir * TransportEmissionParams.perAnnualHourInAir;
};