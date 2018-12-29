import { getCarConstructionEmission } from "../emission-car-construction";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for CarConstruction should', () => {
    it('handle empty inputs', () => {
        expect(getCarConstructionEmission(EmptyEmissionInput)).toBe(0);
    });
});