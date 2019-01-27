export interface EmissionInputPrivateVehicle {
    type: VehicleType; // Big = Terain, Very Large = Hummer
    age: number;
    fuelType: VehicleFuel;
    fuelUsage: number;
    travelWeekly: number;
    freqOfTravelWithPassengers: number; // 0% - 100%
    airConditioning: boolean;
}

export interface EmissionInputPrivateTransport {
    vehicles: EmissionInputPrivateVehicle[];
}


export enum VehicleType {
    Bicycle,
    Motorbike,
    CarSmall,
    CarMedium,
    CarLarge,
    CarVeryLarge,
    CarElectric,
    CarHybid
}

export enum VehicleFuel {
    Gasoline,
    Diesel,
    Gas,
    Hybrid,
    Electric
}
