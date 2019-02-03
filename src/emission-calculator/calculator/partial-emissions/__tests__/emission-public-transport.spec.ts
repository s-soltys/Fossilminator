import { getPublicTransportEmission } from "../emission-public-transport";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for PublicTransport should', () => {
    it('handle empty inputs', () => {
        expect(getPublicTransportEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ emission_gCO2e: 0 }));
    });
});