import { getElectricityEmission } from "../emission-electricity";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for Electricity should', () => {
    it('handle empty inputs', () => {
        expect(getElectricityEmission(EmptyEmissionInput)).toEqual({ co2Emission: 0 });
    });
});