import { EmissionInputActions } from '../actions';
import { InitialAppState, EmissionInputState } from '../constants';

export const emissionInputReducer = (state: EmissionInputState = InitialAppState.emissionInput, action: EmissionInputActions.ActionsTypes): EmissionInputState => {
    switch (action.type) {
        case EmissionInputActions.SetCountryCodeType:
            return { ...state, country: { ...state.country, countryCode: action.payload } };
        case EmissionInputActions.SetEnergeticMixType:
            return { ...state, country: { ...state.country, energeticMix: action.payload } };
        case EmissionInputActions.UpdatePublicTransportType:
            return { ...state, transport: { ...state.transport, ...action.payload } };
        case EmissionInputActions.UpdateFoodType:
            return { ...state, food: { ...state.food, ...action.payload } };
        default:
            return state;
    }
};