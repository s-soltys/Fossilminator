import { EmissionInput } from "../../types/input";
import { FoodEmissionParams } from "../../constants";

export function getFoodProductionEmission({ food }: Partial<EmissionInput>) {
    return food.meatPerWeek * FoodEmissionParams.perMeatDailyMeatConsumption;
};