import { getAirTravelEmission } from "../emission-air-travel";
import { EmptyEmissionInput } from "../../../constants";

describe('Partial emissions for AirTravel should', () => {
    it('handle empty inputs', () => {
        expect(getAirTravelEmission(EmptyEmissionInput)).toBe(NaN);
    });
});