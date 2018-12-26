import { calculateEmissionResults, calculateEmissionResultsWithPartials } from "../emission-calculator";
import { PartialResultCalculatorMap } from "../partial-emission-results";

describe('Usage calculator should', () => {
    const partialMap: PartialResultCalculatorMap = {
        airTravel: (input: any) => input.someValue,
        airConditioning: (input: any) => 20,
        someRandomField: (input: any) => 666
    } as any;

    it('calculate usage', () => {
        const input = {
            someValue: 13.05
        } as any;

        expect(calculateEmissionResultsWithPartials(input, partialMap)).toEqual(
            jasmine.objectContaining({
                airConditioning: 20,
                airTravel: 13.05,
                totalAnnualEmission: 33.05
            })
        );
    });
});
