export interface EmissionInputCountry {
    countryCode: string;
    energeticMix: EnergeticMix;
}

export interface EnergeticMix {
    coal: number;
    nuclear: number;
    water: number;
    wind: number;
    solar: number;
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
    energeticEfficiency: number; // Bardzo słaba, ..., Przeciętna, Doskonała, Dom pasywny
    area: number;
    numberOfPeople: number;
}

export interface EmissionInputWater {
    bathsWeekly: number;
    showersWeekly: number;
    litresPerBath: number; // 50 small bath - 550 big jacuzzi
    waterHeatingType: HeatingType;
}

export interface EmissionInputPrivateVehicle {
    type: VehicleType; // Big = Terain, Very Large = Hummer
    age: number;
    fuelType: VehicleFuel;
    fuelUsage: number;
    TravelWeekly: number;
    freqOfTravelWithPassengers: number; // 0% - 100%
    airConditioning: boolean;
}

export interface EmissionInputPrivateTransport {
    vehicles: EmissionInputPrivateVehicle[];
}

export interface EmissionInputPublicTransport {
    cityBusTravelWeekly: number;
    longDistanceBusTravelWeekly: number;
    microBusTravelWeekly: number;
    metroTramTravelWeekly: number;
    taxiTravelWeekly: number;
    suburbanTrainTravelWeekly: number;

    /**
     * Weekly travel distance in KM for long distance trains
     */
    longDistanceTrainTravelWeekly: number;
    airClass: PlaneClass;
    shortDistanceAirTravelAnnualHours: number;
    longDistanceAirTravelAnnualHours: number;
}


export interface EmissionInputConsumption {
    incomeLevel: number; // Śr. krajowa + %-ty
    recyclingRate: number; // Brak recyklingu, Część śmieci trafia do recyklingu, Duzo, Wiekszosc
    clothing: number; // Uzywane, Nowe gdy stare sa zniszczone, Regularnie nowe, modne
    packagingType: number; // Nie zwracam uwagi, Minimalnie opakowane, Lubie ladne opakowania
    houseEquipment: number; // Uzywane, Nowe ale uzywam dlugo, Kupuje czesto nowe i modne rzeczy
    entertainmentConsumption: number; // Spacery i rower, Kina i lokale, Techniczne - quady i spadochroniarstwo
    electricityUsage: number; // Bardzo oszczednie, Staram sie nie marnowac, Nie przejmuje sie - stać mnie na to
}

export interface EmissionInputTransport {
    carKmPerWeek: number;
    annualHoursInAir: number;
}

export interface EmissionInputFood {
    averageAmountOfFood: number; // Mało, Średnio itd.
    foodSourceLocality: number; // Jem lokalną bez marketów, mały sklep z zyw. lokalna, Towary lokalne i sezonowe, Nie zwracam uwagi na sezonowosc, Egzotyczne
    meatPerWeek: number; // Brak produktów zw. (weganin), Bez mięsa (wegetarianin), 1-2 razy, 3-6 razy, codziennie
    frozenFoodWeekly: number; // wcale, rzadko, 1x tydzień, 2-3 tygodniowo, codziennie
    refridgeratorEfficiency: number; // Brak, Niskoelektywa G-D, Średioefektywna C-B, Energooszczędna A, Bardzo A+
    ovenEfficiency: number; // Elektryczna zwykła, indukcyjna, gazowa, węglowa, Drewno
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