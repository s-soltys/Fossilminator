import { FossilEmissionActions } from '../actions';
import { InitialAppState, EmissionResultState } from '../constants';

export const FossilEmissionReducer = (state: EmissionResultState = InitialAppState.fossilEmission, action: FossilEmissionActions.ActionsTypes): EmissionResultState => {
    switch (action.type) {
        case FossilEmissionActions.SetFossilEmissionsResultType:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};