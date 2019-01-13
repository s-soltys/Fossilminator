import { getPublicTransportEmission } from "../emission-public-transport";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for PublicTransport should', () => {
    it('handle empty inputs', () => {
        expect(getPublicTransportEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ co2Emission: 0 }));
    });
});