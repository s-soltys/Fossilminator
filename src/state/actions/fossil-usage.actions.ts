import { createAction } from '../util';
import { FossilUsageTransport, FossilUsageFood } from '../../emission-calculator';

export type ActionsTypes = PatchTransportUsageAction | PatchFoodUsageAction;

export const PatchTransportUsageType = '[FOSSIL_USAGE] PatchTransportUsage';
export type PatchTransportUsageAction = ReturnType<typeof PatchTransportUsage>;
export const PatchTransportUsage = (transport: FossilUsageTransport) => createAction(PatchTransportUsageType, transport);

export const PatchFoodUsageType = '[FOSSIL_USAGE] PatchFoodUsage';
export type PatchFoodUsageAction = ReturnType<typeof PatchFoodUsage>;
export const PatchFoodUsage = (food: FossilUsageFood) => createAction(PatchFoodUsageType, food);