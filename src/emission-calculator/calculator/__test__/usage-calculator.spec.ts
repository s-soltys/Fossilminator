import { calculateEmissionResults } from "../emission-calculator";

describe('Usage calculator should', () => {
    xit('calculate usage', () => {
        expect(calculateEmissionResults({
            transport: {
                carKmPerWeek: 300,
                annualHoursInAir: 15
            },
            food: {
                meatPerWeek: 1
            }
        })).toEqual({
            food: 2,
            transport: 20.1,
            result: 22.1
        });
    });
});
