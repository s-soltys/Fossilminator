import { calculateFossilEmissions } from "../usage-calculator";

describe('Usage calculator should', () => {
    it('calculate usage', () => {
        expect(calculateFossilEmissions({
            transport: {
                carKmPerWeek: 300,
                annualHoursInAir: 15
            },
            food: {
                meatPerWeek: 1
            }
        })).toEqual({
            food: 1,
            transport: 16.35,
            result: 17.35
        });
    });
});
