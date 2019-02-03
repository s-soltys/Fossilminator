import { getDeforestationEmission } from "../emission-deforestation";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for Deforestation should', () => {
    it('handle empty inputs', () => {
        expect(getDeforestationEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ emission_gCO2e: 0 }));
    });
});