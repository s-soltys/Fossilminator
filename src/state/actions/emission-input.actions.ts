import { createAction } from '../util';
import { EmissionInputTransport, EmissionInputFood } from '../../emission-calculator';

export type ActionsTypes = UpdatePublicTransportAction | UpdateFoodAction;

export const UpdatePublicTransportType = '[FOSSIL_USAGE] UpdatePublicTransport';
export type UpdatePublicTransportAction = ReturnType<typeof UpdatePublicTransport>;
export const UpdatePublicTransport = (transport: EmissionInputTransport) => createAction(UpdatePublicTransportType, transport);

export const UpdateFoodType = '[FOSSIL_USAGE] UpdateFood';
export type UpdateFoodAction = ReturnType<typeof UpdateFood>;
export const UpdateFood = (food: EmissionInputFood) => createAction(UpdateFoodType, food);