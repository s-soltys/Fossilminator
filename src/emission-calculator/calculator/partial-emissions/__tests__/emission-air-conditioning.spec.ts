import { getAirConditioningEmission } from "../emission-air-conditioning";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for airConditioning should', () => {
    it('handle empty inputs', () => {
        expect(getAirConditioningEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ co2Emission: 0 }));
    });
});