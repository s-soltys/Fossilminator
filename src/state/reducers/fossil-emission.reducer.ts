import { EmissionResultActions } from '../actions';
import { InitialAppState, EmissionResultState } from '../constants';

export const emissionResultReducer = (state: EmissionResultState = InitialAppState.emissionResult, action: EmissionResultActions.ActionsTypes): EmissionResultState => {
    switch (action.type) {
        case EmissionResultActions.SetEmissionsResultType:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};