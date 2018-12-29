import { getElectricityEmission } from "../emission-electricity";

describe('Partial emissions for Electricity should', () => {
    it('handle empty inputs', () => {
        expect(getElectricityEmission({} as any)).toBe(0);
    });
});