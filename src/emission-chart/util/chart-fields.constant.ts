import { EmissionResult } from '../../emission-calculator';

export type ChartField = keyof EmissionResult; 

export const CHART_FIELDS: ChartField[] = [
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

export const TOTAL_FIELD = 'totalAnnualEmission';
