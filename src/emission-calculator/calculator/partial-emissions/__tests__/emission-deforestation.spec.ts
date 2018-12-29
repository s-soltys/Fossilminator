import { getDeforestationEmission } from "../emission-deforestation";

describe('Partial emissions for Deforestation should', () => {
    it('handle empty inputs', () => {
        expect(getDeforestationEmission({} as any)).toBe(0);
    });
});