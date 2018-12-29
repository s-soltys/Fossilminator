import { getPublicTransportEmission } from "../emission-public-transport";

describe('Partial emissions for PublicTransport should', () => {
    it('handle empty inputs', () => {
        expect(getPublicTransportEmission({} as any)).toBe(0);
    });
});