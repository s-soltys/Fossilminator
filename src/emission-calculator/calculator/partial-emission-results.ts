import { EmissionInput } from "../types/input";
import { EmissionResultField } from "../types/result";
import { getHousingConstructionEmission } from "./partial-emissions/emission-housing-construction";
import { getHousingHeatingEmission } from "./partial-emissions/emission-housing-heating";
import { getWarmWaterEmission } from "./partial-emissions/emission-warm-water";
import { getAirConditioningEmission } from "./partial-emissions/emission-air-conditioning";
import { getFuelForTransportEmission } from "./partial-emissions/emission-fuel-for-transport";
import { getCarConstructionEmission } from "./partial-emissions/emission-car-construction";
import { getPublicTransportEmission } from "./partial-emissions/emission-public-transport";
import { getConsumptionEmission } from "./partial-emissions/emission-consumption";
import { getElectricityEmission } from "./partial-emissions/emission-electricity";
import { getDeforestationEmission } from "./partial-emissions/emission-deforestation";
import { getCommonServicesEmission } from "./partial-emissions/emission-common-services";
import { getAirTravelEmission } from "./partial-emissions/emission-air-travel";
import { getFoodProductionEmission } from "./partial-emissions/emission-food-production";

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