import { getCommonServicesEmission } from "../emission-common-services";

describe('Partial emissions for CommonServices should', () => {
    it('handle empty inputs', () => {
        expect(getCommonServicesEmission({} as any)).toBe(0);
    });
});