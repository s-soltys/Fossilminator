import { EmissionInputActions } from '../actions';
import { InitialAppState, EmissionInputState } from '../constants';

export const FossilUsageReducer = (state: EmissionInputState = InitialAppState.fossilUsage, action: EmissionInputActions.ActionsTypes): EmissionInputState => {
    switch (action.type) {
        case EmissionInputActions.UpdatePublicTransportType:
            return { ...state, transport: { ...state.transport, ...action.payload } };
        case EmissionInputActions.UpdateFoodType:
            return { ...state, food: { ...state.food, ...action.payload } };
        default:
            return state;
    }
};