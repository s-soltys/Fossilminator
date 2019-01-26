import { getFuelForTransportEmission } from "../emission-fuel-for-transport";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for FuelForTransport should', () => {
    it('handle empty inputs', () => {
        expect(getFuelForTransportEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ emission_gCO2e: 0 }));
    });
});