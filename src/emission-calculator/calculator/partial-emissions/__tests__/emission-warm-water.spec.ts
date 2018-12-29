import { getWarmWaterEmission } from "../emission-warm-water";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for WarmWater should', () => {
    it('handle empty inputs', () => {
        expect(getWarmWaterEmission(EmptyEmissionInput)).toBe(0);
    });
});