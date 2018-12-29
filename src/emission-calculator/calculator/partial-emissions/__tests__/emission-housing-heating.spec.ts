import { getHousingHeatingEmission } from "../emission-housing-heating";

describe('Partial emissions for HousingHeating should', () => {
    it('handle empty inputs', () => {
        expect(getHousingHeatingEmission({} as any)).toBe(0);
    });
});