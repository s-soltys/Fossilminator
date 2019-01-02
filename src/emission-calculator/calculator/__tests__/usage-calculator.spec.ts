import { calculateEmissionResultsWithPartials } from "../total-emission-calculator";
import { PartialResultCalculatorMap } from "../partial-emission-results";

describe('Usage calculator should', () => {
    const partialMap: PartialResultCalculatorMap = {
        airTravel: (input: any) => input.someValue,
        airConditioning: (input: any) => 20,
        someRandomField: (input: any) => 666
    } as any;

    it('calculate usage', () => {
        const input: any = { someValue: 13.05 };

        const result = calculateEmissionResultsWithPartials(input, partialMap);

        expect(result).toEqual(
            jasmine.objectContaining({
                airConditioning: 20,
                airTravel: 13.05,
                totalAnnualEmission: 33.05
            })
        );
    });

    it('ignore unexpected fields', () => {
        const input: any = {};

        const result = calculateEmissionResultsWithPartials(input, partialMap);

        expect((result as any).someRandomField).toBeUndefined();
        expect(result).toEqual(jasmine.objectContaining({
            airConditioning: 20,
            totalAnnualEmission: 20
        }));
    });
});
