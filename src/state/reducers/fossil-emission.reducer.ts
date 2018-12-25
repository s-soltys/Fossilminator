import { EmissionResultActions } from '../actions';
import { InitialAppState, EmissionResultState } from '../constants';

export const FossilEmissionReducer = (state: EmissionResultState = InitialAppState.fossilEmission, action: EmissionResultActions.ActionsTypes): EmissionResultState => {
    switch (action.type) {
        case EmissionResultActions.SetEmissionsResultType:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};