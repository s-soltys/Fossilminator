import { getCarConstructionEmission } from "../emission-car-construction";

describe('Partial emissions for CarConstruction should', () => {
    it('handle empty inputs', () => {
        expect(getCarConstructionEmission({} as any)).toBe(0);
    });
});