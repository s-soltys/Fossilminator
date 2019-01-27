import { VehicleType, VehicleFuel } from "../../emission-calculator";

export const vehicleTypeOptions = [
    { value: VehicleType.Bicycle, label: 'privateTransport.vehicleType.bicycle' },
    { value: VehicleType.Motorbike, label: 'privateTransport.vehicleType.motorbike' },
    { value: VehicleType.CarSmall, label: 'privateTransport.vehicleType.carSmall' },
    { value: VehicleType.CarMedium, label: 'privateTransport.vehicleType.carMedium' },
    { value: VehicleType.CarLarge, label: 'privateTransport.vehicleType.carLarge' }
];

export const vehicleFuelTypeOptions = [
    { value: VehicleFuel.Gasoline, label: 'privateTransport.fuelType.gasoline' },
    { value: VehicleFuel.Diesel, label: 'privateTransport.fuelType.diesel' },
    { value: VehicleFuel.Gas, label: 'privateTransport.fuelType.gas' },
    { value: VehicleFuel.Hybrid, label: 'privateTransport.fuelType.hybrid' },
    { value: VehicleFuel.Electric, label: 'privateTransport.fuelType.electric' },
];