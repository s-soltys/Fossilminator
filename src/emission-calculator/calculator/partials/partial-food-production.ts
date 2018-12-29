import { EmissionInput } from "../../types/input";
import { FoodEmissionParams } from "../../constants";

export function getFoodProductionEmission({ food }: EmissionInput) {
    return food.meatPerWeek * FoodEmissionParams.perMeatDailyMeatConsumption;
};