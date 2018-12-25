export interface EmissionInputTransport {
    carKmPerWeek: number;
    annualHoursInAir: number;
}

export interface EmissionInputFood {
    meatPerWeek: number;
}

export interface EmissionInput {
    transport: EmissionInputTransport;
    food: EmissionInputFood;
}