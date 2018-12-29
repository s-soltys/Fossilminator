import { getWarmWaterEmission } from "../emission-warm-water";

describe('Partial emissions for WarmWater should', () => {
    it('handle empty inputs', () => {
        expect(getWarmWaterEmission({} as any)).toBe(0);
    });
});