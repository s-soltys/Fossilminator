import { getCommonServicesEmission } from "../emission-common-services";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for CommonServices should', () => {
    it('handle empty inputs', () => {
        expect(getCommonServicesEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ co2Emission: 0 }));
    });
});