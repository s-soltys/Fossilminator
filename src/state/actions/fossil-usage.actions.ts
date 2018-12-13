import { createAction } from '../util';
import { FossilUsageTransport } from '../../fossil-usage';

export type ActionsTypes = PatchTransportUsageAction;

export const PatchTransportUsageType = '[FOSSIL_USAGE] PatchTransportUsage';
export type PatchTransportUsageAction = ReturnType<typeof PatchTransportUsage>;
export const PatchTransportUsage = (transport: FossilUsageTransport) => createAction(PatchTransportUsageType, transport);