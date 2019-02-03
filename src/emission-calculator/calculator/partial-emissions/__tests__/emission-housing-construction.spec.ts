import { getHousingConstructionEmission } from "../emission-housing-construction";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for HousingConstruction should', () => {
    it('handle empty inputs', () => {
        expect(getHousingConstructionEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ emission_gCO2e: 0.2 }));
    });
});