import { getFuelForTransportEmission } from "../emission-fuel-for-transport";

describe('Partial emissions for FuelForTransport should', () => {
    it('handle empty inputs', () => {
        expect(getFuelForTransportEmission({} as any)).toBe(0);
    });
});