import { EmissionResultField } from "./emission-result.interface";

export const EmissionResultPartialFields: EmissionResultField[] = [
    'housingConstruction',
    'housingHeating',
    'warmWater',
    'airConditioning',
    'fuelForTransport',
    'carConstuction',
    'publicTransport',
    'airTravel',
    'foodProduction',
    'consumption',
    'electricity',
    'deforestation',
    'commonServices'
];

export const EmissionResultTotalField: EmissionResultField = 'totalAnnualEmission';