import { EmissionInputActions } from '../actions';
import { InitialAppState, EmissionInputState } from '../constants';

export const emissionInputReducer = (state: EmissionInputState = InitialAppState.emissionInput, action: EmissionInputActions.ActionsTypes): EmissionInputState => {
    switch (action.type) {
        case EmissionInputActions.UpdatePublicTransportType:
            return { ...state, transport: { ...state.transport, ...action.payload } };
        case EmissionInputActions.UpdateFoodType:
            return { ...state, food: { ...state.food, ...action.payload } };
        default:
            return state;
    }
};