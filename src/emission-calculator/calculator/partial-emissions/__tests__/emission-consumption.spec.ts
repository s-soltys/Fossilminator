import { getConsumptionEmission } from "../emission-consumption";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for Consumption should', () => {
    it('handle empty inputs', () => {
        expect(getConsumptionEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ co2Emission: 0 }));
    });
});