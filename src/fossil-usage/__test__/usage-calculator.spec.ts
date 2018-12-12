import { calculateFossilEmissions } from "../usage-calculator";

describe('Usage calculator should', () => {
    it('calculate usage', () => {
        expect(calculateFossilEmissions({
            transport: {
                carKmPerWeek: 300
            }
        })).toEqual({
            consumption: 5,
            transport: 15.6,
            result: 20.6
        });
    });
});
