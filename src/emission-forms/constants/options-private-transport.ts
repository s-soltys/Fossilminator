import { VehicleType } from "../../emission-calculator";

export const vehicleTypeOptions = [
    { value: VehicleType.Bicycle, label: 'privateTransport.vehicleType.bicycle' },
    { value: VehicleType.Motorbike, label: 'privateTransport.vehicleType.motorbike' },
    { value: VehicleType.CarSmall, label: 'privateTransport.vehicleType.carSmall' },
    { value: VehicleType.CarMedium, label: 'privateTransport.vehicleType.carMedium' },
    { value: VehicleType.CarLarge, label: 'privateTransport.vehicleType.carLarge' },
    { value: VehicleType.CarVeryLarge, label: 'privateTransport.vehicleType.carVeryLarge' },
    { value: VehicleType.CarHybid, label: 'privateTransport.vehicleType.carHybrid' },
    { value: VehicleType.CarElectric, label: 'privateTransport.vehicleType.carElectric' }
];