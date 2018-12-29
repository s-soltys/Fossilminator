import { EmissionInput } from "../../types/input";
import { WeeksPerYear, TransportEmissionParams } from "../../constants";

export function getFuelForTransportEmission({ transport }: Partial<EmissionInput>) {
    return transport.carKmPerWeek * WeeksPerYear * TransportEmissionParams.perKmOfCarTravel;
};