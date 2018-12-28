import { EnergeticMix } from "../types/input";

const ZERO_MIX: EnergeticMix = {
    coal: 0,
    nuclear: 0,
    water: 0,
    wind: 0,
    solar: 0
};

export function getEnergeticMixPerCountry(countryCode: string): EnergeticMix {
    switch (countryCode) {
        case 'pl':
            return { ...ZERO_MIX, coal: 0.8, water: 0.2 };
        default:
            return { ...ZERO_MIX, coal: 0.5, nuclear: 0.2, solar: 0.1, wind: 0.1, water: 0.2 };
    }
}