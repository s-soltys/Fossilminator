import { PlaneClass } from "./emission-input-types.enum";

export interface EmissionInputPublicTransport {
    cityBusTravelWeekly: number;
    longDistanceBusTravelWeekly: number;
    microBusTravelWeekly: number;
    metroTramTravelWeekly: number;
    taxiTravelWeekly: number;
    suburbanTrainTravelWeekly: number;

    /**
     * Weekly travel distance in KM for long distance trains
     */
    longDistanceTrainTravelWeekly: number;
    airClass: PlaneClass;
    shortDistanceAirTravelAnnualHours: number;
    longDistanceAirTravelAnnualHours: number;
}