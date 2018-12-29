import { getConsumptionEmission } from "../emission-consumption";

describe('Partial emissions for Consumption should', () => {
    it('handle empty inputs', () => {
        expect(getConsumptionEmission({} as any)).toBe(0);
    });
});