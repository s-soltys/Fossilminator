import { EmissionInput } from "../types/input";
import { EmissionResultField } from "../types/result";
import { getHousingConstructionEmission } from "./partials/partial-housing-construction";
import { getHousingHeatingEmission } from "./partials/partial-housing-heating";
import { getWarmWaterEmission } from "./partials/partial-warm-water";
import { getAirConditioningEmission } from "./partials/partial-air-conditioning";
import { getFuelForTransportEmission } from "./partials/partial-fuel-for-transport";
import { getCarConstructionEmission } from "./partials/partial-car-construction";
import { getPublicTransportEmission } from "./partials/partial-public-transport";
import { getConsumptionEmission } from "./partials/partial-consumption";
import { getElectricityEmission } from "./partials/partial-electricity";
import { getDeforestationEmission } from "./partials/partial-deforestation";
import { getCommonServicesEmission } from "./partials/partial-common-services";
import { getAirTravelEmission } from "./partials/partial-air-travel";
import { getFoodProductionEmission } from "./partials/partial-food-production";

export type PartialResultCalculatorMap = {
    [key in EmissionResultField]: (input: EmissionInput) => number;
};

export const PartialEmissionResult: PartialResultCalculatorMap = {
    housingConstruction: getHousingConstructionEmission,
    housingHeating: getHousingHeatingEmission,
    warmWater: getWarmWaterEmission,
    airConditioning: getAirConditioningEmission,
    fuelForTransport: getFuelForTransportEmission,
    carConstuction: getCarConstructionEmission,
    publicTransport: getPublicTransportEmission,
    airTravel: getAirTravelEmission,
    foodProduction: getFoodProductionEmission,
    consumption: getConsumptionEmission,
    electricity: getElectricityEmission,
    deforestation: getDeforestationEmission,
    commonServices: getCommonServicesEmission,
    totalAnnualEmission: undefined
};