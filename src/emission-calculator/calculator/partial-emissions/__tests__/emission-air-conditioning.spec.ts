import { getAirConditioningEmission } from "../emission-air-conditioning";

describe('Partial emissions for airConditioning should', () => {
    it('handle empty inputs', () => {
        expect(getAirConditioningEmission({} as any)).toBe(0);
    });
});