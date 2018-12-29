export interface EmissionInputCountry {
    countryCode: string;
    energeticMix: EnergeticMix;
}

export interface EnergeticMix {
    coal: number;
    nuclear: number;
    water: number;
    wind: number;
    solar: number;
}
