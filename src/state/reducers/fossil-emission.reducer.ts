import { FossilEmissionActions } from '../actions';
import { InitialAppState, FossilEmissionState } from '../constants';

export const FossilEmissionReducer = (state: FossilEmissionState = InitialAppState.fossilEmission, action: FossilEmissionActions.ActionsTypes): FossilEmissionState => {
    switch (action.type) {
        case FossilEmissionActions.SetFossilEmissionsResultType:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};