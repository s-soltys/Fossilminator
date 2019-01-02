import { getDeforestationEmission } from "../emission-deforestation";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for Deforestation should', () => {
    it('handle empty inputs', () => {
        expect(getDeforestationEmission(EmptyEmissionInput)).toBe(0);
    });
});