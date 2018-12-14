import { createAction } from '../util';
import { FossilUsageTransport, FossilUsageFood } from '../../fossil-usage';

export type ActionsTypes = PatchTransportUsageAction | PatchFoodUsageAction;

export const PatchTransportUsageType = '[FOSSIL_USAGE] PatchTransportUsage';
export type PatchTransportUsageAction = ReturnType<typeof PatchTransportUsage>;
export const PatchTransportUsage = (transport: FossilUsageTransport) => createAction(PatchTransportUsageType, transport);

export const PatchFoodUsageType = '[FOSSIL_USAGE] PatchFoodUsage';
export type PatchFoodUsageAction = ReturnType<typeof PatchFoodUsage>;
export const PatchFoodUsage = (transport: FossilUsageFood) => createAction(PatchFoodUsageType, transport);