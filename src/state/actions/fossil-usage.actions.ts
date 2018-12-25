import { createAction } from '../util';
import { EmissionInputTransport, EmissionInputFood } from '../../emission-calculator';

export type ActionsTypes = PatchTransportUsageAction | PatchFoodUsageAction;

export const PatchTransportUsageType = '[FOSSIL_USAGE] PatchTransportUsage';
export type PatchTransportUsageAction = ReturnType<typeof PatchTransportUsage>;
export const PatchTransportUsage = (transport: EmissionInputTransport) => createAction(PatchTransportUsageType, transport);

export const PatchFoodUsageType = '[FOSSIL_USAGE] PatchFoodUsage';
export type PatchFoodUsageAction = ReturnType<typeof PatchFoodUsage>;
export const PatchFoodUsage = (food: EmissionInputFood) => createAction(PatchFoodUsageType, food);