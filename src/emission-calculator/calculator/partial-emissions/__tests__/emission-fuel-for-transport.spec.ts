import { getFuelForTransportEmission } from "../emission-fuel-for-transport";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for FuelForTransport should', () => {
    it('handle empty inputs', () => {
        expect(getFuelForTransportEmission(EmptyEmissionInput)).toEqual({ co2Emission: 0 });
    });
});