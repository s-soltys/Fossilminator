export interface FossilUsageTransport {
    carKmPerWeek: number;
    annualHoursInAir: number;
}

export interface FossilUsageFood {
    meatPerWeek: number;
}

export interface FossilUsageParams {
    transport: FossilUsageTransport;
    food: FossilUsageFood;
}