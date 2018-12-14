import { FossilUsageActions } from '../actions';
import { InitialAppState, FossilUsageState } from '../constants';

export const FossilUsageReducer = (state: FossilUsageState = InitialAppState.fossilUsage, action: FossilUsageActions.ActionsTypes): FossilUsageState => {
    switch (action.type) {
        case FossilUsageActions.PatchTransportUsageType:
            return { ...state, transport: { ...state.transport, ...action.payload } };
        case FossilUsageActions.PatchFoodUsageType:
            return { ...state, food: { ...state.food, ...action.payload } };
        default:
            return state;
    }
};