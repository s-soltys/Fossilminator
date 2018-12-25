import { FossilUsageActions } from '../actions';
import { InitialAppState, EmissionInputState } from '../constants';

export const FossilUsageReducer = (state: EmissionInputState = InitialAppState.fossilUsage, action: FossilUsageActions.ActionsTypes): EmissionInputState => {
    switch (action.type) {
        case FossilUsageActions.PatchTransportUsageType:
            return { ...state, transport: { ...state.transport, ...action.payload } };
        case FossilUsageActions.PatchFoodUsageType:
            return { ...state, food: { ...state.food, ...action.payload } };
        default:
            return state;
    }
};