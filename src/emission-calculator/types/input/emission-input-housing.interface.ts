import { BuildingType, BuildingMaterial } from "./emission-input-types.enum";

export interface EmissionInputHousing {
    buildingType: BuildingType;
    buildingMaterial: BuildingMaterial;
    energeticEfficiency: number; // Bardzo słaba, ..., Przeciętna, Doskonała, Dom pasywny
    area: number;
    numberOfPeople: number;
}