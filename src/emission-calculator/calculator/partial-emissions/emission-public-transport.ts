import { EmissionInput } from "../../types/input";
import { WeeksPerYear } from "../../constants";
import { EmissionResultDetails } from "../../types/result";

const cityBusEmissionPerKm = 0.0025;
const taxiEmissionPerKm = 0.015;

export function getPublicTransportEmission({ publicTransport }: Partial<EmissionInput>): EmissionResultDetails {
    const cityBusEmission = publicTransport.cityBusTravelWeekly * WeeksPerYear * cityBusEmissionPerKm;
    const taxiEmission = publicTransport.taxiTravelWeekly * WeeksPerYear * taxiEmissionPerKm;
    
    const partialResults = [
        cityBusEmission,
        taxiEmission
    ];

    const result = partialResults.reduce((sum, partial) => sum + partial, 0);

    return {
        co2Emission: result
    };
};