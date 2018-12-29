import { EmissionInput, PlaneClass } from '../types/input';

export const EmptyEmissionInput: EmissionInput = {
    country: {
        countryCode: null,
        energeticMix: {
            coal: 0,
            nuclear: 0,
            solar: 0,
            water: 0,
            wind: 0
        }
    },
    housing: {} as any,
    water: {} as any,
    privateTransport: {} as any,
    publicTransport: {
        cityBusTravelWeekly: null,
        longDistanceBusTravelWeekly: null,
        microBusTravelWeekly: null,
        metroTramTravelWeekly: null,
        taxiTravelWeekly: null,
        suburbanTrainTravelWeekly: null,
        longDistanceTrainTravelWeekly: null,
        airClass: PlaneClass.Economy,
        shortDistanceAirTravelAnnualHours: null,
        longDistanceAirTravelAnnualHours: null
    },
    food: {} as any,
    consumption: {} as any,
};