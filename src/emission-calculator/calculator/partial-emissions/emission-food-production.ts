import { EmissionInput } from "../../types/input";

export const FoodEmissionParams = {
    perMeatDailyMeatConsumption: 2,
};

export function getFoodProductionEmission({ food }: Partial<EmissionInput>) {
    const amountModifier = (food.averageAmountOfFood || 1) * 0.5;

    const localityModifier = (food.foodSourceLocality || 1) * 0.5;

    const meatEmission = (food.meatPerWeek || 2) * FoodEmissionParams.perMeatDailyMeatConsumption;

    const results = [
        meatEmission
    ];

    const result = amountModifier * localityModifier * results.reduce((sum, r) => sum + r, 0);

    return result;
};