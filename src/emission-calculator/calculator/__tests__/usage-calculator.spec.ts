import { calculateEmissionResultsWithPartials } from "../total-emission-calculator";
import { PartialResultCalculatorMap } from "../partial-emission-results";

describe('Usage calculator should', () => {
    const partialMap: PartialResultCalculatorMap = {
        airTravel: (input: any) => { co2Emission: input.someValue },
        airConditioning: (input: any) => { co2Emission: 20 },
        someRandomField: (input: any) => { co2Emission: 666 }
    } as any;

    it('calculate usage', () => {
        const input: any = { someValue: 13.05 };

        const result = calculateEmissionResultsWithPartials(input, partialMap);

        expect(result).toEqual(
            jasmine.objectContaining({
                airConditioning: { co2Emission: 20 },
                airTravel: { co2Emission: 13.05 },
                totalAnnualEmission: { co2Emission: 33.05 }
            })
        );
    });

    fit('ignore unexpected fields', () => {
        const input: any = {};

        const result = calculateEmissionResultsWithPartials(input, partialMap);

        expect((result as any).someRandomField).toBeUndefined();
        expect(result).toEqual(jasmine.objectContaining({
            airConditioning: { co2Emission: 20 },
            // totalAnnualEmission: { co2Emission: 20 }
        }));
    });
});
