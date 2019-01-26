import { getWarmWaterEmission } from "../emission-warm-water";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for WarmWater should', () => {
    it('handle empty inputs', () => {
        expect(getWarmWaterEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ emission_gCO2e: 0 }));
    });
});