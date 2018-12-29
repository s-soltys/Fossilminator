import { EmissionInput } from '../types/input';

export const EmptyEmissionInput: EmissionInput = {
    country: {
        countryCode: null,
        energeticMix: {} as any
    },
    transport: {} as any,
    housing: {} as any,
    water: {} as any,
    privateTransport: {} as any,
    publicTransport: {} as any,
    food: {} as any,
    consumption: {} as any,
};