import { getFoodProductionEmission } from "../emission-food-production";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for FoodProduction should', () => {
    it('handle empty inputs', () => {
        expect(getFoodProductionEmission(EmptyEmissionInput)).toEqual({ co2Emission: 0.5 });
    });
});