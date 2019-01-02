import { EmissionInputCountry } from "./emission-input-country.interface";
import { EmissionInputWater } from "./emission-input-water.interface";
import { EmissionInputHousing } from "./emission-input-housing.interface";
import { EmissionInputPublicTransport } from "./emission-input-public-transport.interface";
import { EmissionInputConsumption } from "./emission-input-consumption.interface";
import { EmissionInputFood } from "./emission-input-food.interface";
import { EmissionInputPrivateTransport } from "./emission-input-private-transport.interface";

export interface EmissionInput {
    country: EmissionInputCountry;
    housing: EmissionInputHousing;
    water: EmissionInputWater;
    privateTransport: EmissionInputPrivateTransport;
    publicTransport: EmissionInputPublicTransport;
    food: EmissionInputFood;
    consumption: EmissionInputConsumption;
}