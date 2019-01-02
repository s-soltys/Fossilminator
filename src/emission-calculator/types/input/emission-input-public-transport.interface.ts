export enum PlaneClass {
    Economy,
    Business,
    First
}

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