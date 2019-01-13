import { getHousingHeatingEmission } from "../emission-housing-heating";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for HousingHeating should', () => {
    it('handle empty inputs', () => {
        expect(getHousingHeatingEmission(EmptyEmissionInput)).toEqual({ co2Emission: 0 });
    });
});