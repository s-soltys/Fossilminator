import { getAirTravelEmission } from "../emission-air-travel";
import { EmptyEmissionInput } from "../../../constants";
import { EmissionInputPublicTransport, PlaneClass } from "../../../types/input";

describe('Partial emissions for air travel should', () => {
    it('handle empty inputs', () => {
        expect(getAirTravelEmission(EmptyEmissionInput)).toEqual(jasmine.objectContaining({ co2Emission: 0}));
    });

    it('return higher emissions for long distance flights', () => {
        const longEmission = getEmissionForPublicTranspot({
            longDistanceAirTravelAnnualHours: 100
        });

        const shortEmission = getEmissionForPublicTranspot({
            shortDistanceAirTravelAnnualHours: 100
        });

        expect(longEmission.co2Emission).toBeGreaterThan(shortEmission.co2Emission);
    });

    it('return higher emissions for higher plane class', () => {
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

        expect(economyEmission.co2Emission).toBeLessThan(businessEmission.co2Emission);
        expect(businessEmission.co2Emission).toBeLessThan(firstClassEmission.co2Emission);
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