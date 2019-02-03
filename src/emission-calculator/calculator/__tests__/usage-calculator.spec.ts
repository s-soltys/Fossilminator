import { calculateEmissionResultsWithPartials, combineEmissionResult } from "../total-emission-calculator";
import { PartialResultCalculatorMap } from "../partial-emission-results";

describe('Usage calculator should', () => {
    const partialMap: PartialResultCalculatorMap = {
        airTravel: (input: any) => ({ emission_gCO2e: input.someValue }),
        airConditioning: (input: any) => ({ emission_gCO2e: 20 }),
        someRandomField: (input: any) => ({ emission_gCO2e: 666 })
    } as any;

    it('calculate usage', () => {
        const input: any = { someValue: 13.05 };

        const result = calculateEmissionResultsWithPartials(input, partialMap);

        expect(result).toEqual(
            jasmine.objectContaining({
                airConditioning: { emission_gCO2e: 20 },
                airTravel: { emission_gCO2e: 13.05 },
                totalAnnualEmission: { emission_gCO2e: 33.05 }
            })
        );
    });

    it('ignore unexpected fields', () => {
        const input: any = {};

        const result = calculateEmissionResultsWithPartials(input, partialMap);

        expect((result as any).someRandomField).toBeUndefined();
        expect(result).toEqual(jasmine.objectContaining({
            airConditioning: { emission_gCO2e: 20 },
            totalAnnualEmission: { emission_gCO2e: 20 }
        }));
    });

    describe('should combine result details', () => {
        it('for unexpected values', () => {
            expect(combineEmissionResult({} as any, { emission_gCO2e: 13 })).toEqual({ emission_gCO2e: 13 });
        });
    });
});
