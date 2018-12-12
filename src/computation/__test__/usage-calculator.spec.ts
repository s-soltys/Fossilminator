import { calculateUsage } from "../usage-calculator";

describe('Usage calculator should', () => {
    it('calculate usage', () => {
        expect(calculateUsage({
            data: ['a', 'b', 'c']
        })).toEqual({
            result: 3
        });
    });
});
