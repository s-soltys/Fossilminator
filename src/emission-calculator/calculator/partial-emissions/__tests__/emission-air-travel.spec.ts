import { getAirTravelEmission } from "../emission-air-travel";
import { EmptyEmissionInput } from "../../../constants";
import { EmissionInputPublicTransport, PlaneClass } from "../../../types/input";

describe('Partial emissions for air travel should', () => {
    it('handle empty inputs', () => {
        expect(getAirTravelEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ emission_gCO2e: 0}));
    });

    it('return lower emissions for long distance flights for same length of flights', () => {
        const longEmission = getEmissionForPublicTranspot({
            longDistanceAirTravelAnnualHours: 100
        });

        const shortEmission = getEmissionForPublicTranspot({
            shortDistanceAirTravelAnnualHours: 100
        });

        expect(longEmission.emission_gCO2e).toBeLessThan(shortEmission.emission_gCO2e);
    });

    xit('return higher emissions for higher plane class', () => {
        const travelTimes = {
            shortDistanceAirTravelAnnualHours: 100,
            longDistanceAirTravelAnnualHours: 100
        };

        const economyEmission = getEmissionForPublicTranspot({
            airClass: PlaneClass.Economy, ...travelTimes
        });

        const businessEmission = getEmissionForPublicTranspot({
            airClass: PlaneClass.Business, ...travelTimes
        });

        const firstClassEmission = getEmissionForPublicTranspot({
            airClass: PlaneClass.First, ...travelTimes
        });

        expect(economyEmission.emission_gCO2e).toBeLessThan(businessEmission.emission_gCO2e);
        expect(businessEmission.emission_gCO2e).toBeLessThan(firstClassEmission.emission_gCO2e);
    });
});

function getEmissionForPublicTranspot(input: Partial<EmissionInputPublicTransport>) {
    return getAirTravelEmission({
        ...EmptyEmissionInput,
        publicTransport: {
            ...EmptyEmissionInput.publicTransport,
            ...input
        }
    });
}