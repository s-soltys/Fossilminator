import { getAirTravelEmission } from "../emission-air-travel";

describe('Partial emissions for AirTravel should', () => {
    it('handle empty inputs', () => {
        expect(getAirTravelEmission({} as any)).toBe(0);
    });
});