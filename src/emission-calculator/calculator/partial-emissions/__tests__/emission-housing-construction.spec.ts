import { getHousingConstructionEmission } from "../emission-housing-construction";

describe('Partial emissions for HousingConstruction should', () => {
    it('handle empty inputs', () => {
        expect(getHousingConstructionEmission({} as any)).toBe(0);
    });
});