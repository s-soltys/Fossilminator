import { VehicleType, VehicleFuel } from "./emission-input-types.enum";

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

