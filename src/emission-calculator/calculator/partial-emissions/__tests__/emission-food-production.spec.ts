import { getFoodProductionEmission } from "../emission-food-production";

describe('Partial emissions for FoodProduction should', () => {
    it('handle empty inputs', () => {
        expect(getFoodProductionEmission({} as any)).toBe(0);
    });
});