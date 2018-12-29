import { createAction } from '../util';
import { EmissionInputFood, EnergeticMix, EmissionInputPublicTransport } from '../../emission-calculator';

export type ActionsTypes = SetCountryCodeAction | SetEnergeticMixAction | UpdatePublicTransportAction | UpdateFoodAction;

export const SetCountryCodeType = '[FOSSIL_USAGE] SetCountryCode';
export type SetCountryCodeAction = ReturnType<typeof SetCountryCode>;
export const SetCountryCode = (countryCode: string) => createAction(SetCountryCodeType, countryCode);

export const SetEnergeticMixType = '[FOSSIL_USAGE] SetEnergeticMix';
export type SetEnergeticMixAction = ReturnType<typeof SetEnergeticMix>;
export const SetEnergeticMix = (energeticMix: EnergeticMix) => createAction(SetEnergeticMixType, energeticMix);

export const UpdatePublicTransportType = '[FOSSIL_USAGE] UpdatePublicTransport';
export type UpdatePublicTransportAction = ReturnType<typeof UpdatePublicTransport>;
export const UpdatePublicTransport = (transport: Partial<EmissionInputPublicTransport>) => createAction(UpdatePublicTransportType, transport);

export const UpdateFoodType = '[FOSSIL_USAGE] UpdateFood';
export type UpdateFoodAction = ReturnType<typeof UpdateFood>;
export const UpdateFood = (food: Partial<EmissionInputFood>) => createAction(UpdateFoodType, food);