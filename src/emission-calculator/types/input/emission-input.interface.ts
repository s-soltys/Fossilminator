export interface EmissionInputCountry {
    countryCode: string;
}

export interface EmissionInputHousing {}

export interface EmissionInputPublicTransport {}

export interface EmissionInputPrivateTransport {}

export interface EmissionInputFood {}

export interface EmissionInputConsumption {}

export interface EmissionInputTransport {
    carKmPerWeek: number;
    annualHoursInAir: number;
}

export interface EmissionInputFood {
    meatPerWeek: number;
}

export interface EmissionInput {
    country: EmissionInputCountry;
    transport: EmissionInputTransport;
    food: EmissionInputFood;
}