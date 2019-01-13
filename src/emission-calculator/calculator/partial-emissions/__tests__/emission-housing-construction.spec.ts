import { getHousingConstructionEmission } from "../emission-housing-construction";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for HousingConstruction should', () => {
    it('handle empty inputs', () => {
        expect(getHousingConstructionEmission(EmptyEmissionInput)).toEqual({ co2Emission: 0.2 });
    });
});