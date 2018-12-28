export interface EmissionInputCountry {
    countryCode: string;
}

export enum HeatingType {
    Central,
    HeatingOil,
    Gas,
    Coal,
    CoalModern,
    Electric,
    Biomas
}

export enum PlaneClass {
    Economy,
    Business,
    First
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

export enum VehicleType {
    Bicycle,
    Motorbike,
    CarSmall,
    CarMedium,
    CarLarge,
    CarVeryLarge
}

export enum VehicleFuel {
    Gasoline,
    Diesel,
    Gas,
    Hybrid,
    Electric
}

export interface EmissionInputHousing {
    buildingType: BuildingType;
    buildingMaterial: BuildingMaterial;
    energeticEfficiency: number;
    area: number;
    numberOfPeople: number;
}

export interface EmissionInputWater {
    bathsWeekly: number;
    showersWeekly: number;
    litresPerBath: number;
    waterHeatingType: HeatingType;
}

export interface EmissionInputPrivateVehicle {
    type: VehicleType;
    age: number;
    fuelType: VehicleFuel;
    fuelUsage: number;
    travelWeeklyKm: number;
    freqOfTravelWithPassengers: number;
    airConditioning: boolean;
}

export interface EmissionInputPrivateTransport {
    vehicles: EmissionInputPrivateVehicle[];
}

export interface EmissionInputPublicTransport {
    cityBusTravelWeeklyKm: number;
    longDistanceBusTravelWeeklyKm: number;
    microBusTravelWeeklyKm: number;
    metroTramTravelWeeklyKm: number;
    taxiTravelWeeklyKm: number;
    suburbanTrainTravelWeeklyKm: number;
    longDistanceTrainTravelWeeklyKm: number;
    airClass: PlaneClass;
    shortDistanceAirTravelAnnualHours: number;
    longDistanceAirTravelAnnualHours: number;
}


export interface EmissionInputConsumption {
    incomeLevel: number;
    recyclingRate: number;
    clothing: number;
    packagingType: number;
    houseEquipment: number;
    entertainmentConsumption: number;
    electricityUsage: number;
}

export interface EmissionInputTransport {
    carKmPerWeek: number;
    annualHoursInAir: number;
}

export interface EmissionInputFood {
    averageAmountOfFood: number;
    foodSourceLocality: number;
    meatPerWeek: number;
    frozenFoodWeekly: number;
    refridgeratorEfficiency: number;
    ovenEfficiency: number;
    additionalFreezer: boolean;
    dishwasher: boolean;
}

export interface EmissionInput {
    country: EmissionInputCountry;
    transport: EmissionInputTransport;
    
    housing: EmissionInputHousing;
    water: EmissionInputWater;
    privateTransport: EmissionInputPrivateTransport;
    publicTransport: EmissionInputPublicTransport;
    food: EmissionInputFood;
    consumption: EmissionInputConsumption;
}