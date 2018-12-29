export interface EmissionInputHousing {
    buildingType: BuildingType;
    buildingMaterial: BuildingMaterial;
    energeticEfficiency: number; // Bardzo słaba, ..., Przeciętna, Doskonała, Dom pasywny
    area: number;
    numberOfPeople: number;
}

export enum BuildingType {
    SingleFamilyHouse,
    TerraceHouse,
    FlatInBuilding
}

export enum BuildingMaterial {
    Concrete,
    Brick,
    Wood
}