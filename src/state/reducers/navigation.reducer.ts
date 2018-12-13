import { NavigationActions } from '../actions';
import { InitialAppState, NavigationState } from '../constants';

export const NavigationReducer = (state: NavigationState = InitialAppState.navigation, action: NavigationActions.ActionsTypes): NavigationState => {
    switch (action.type) {
        case NavigationActions.SetNavigationSectionType:
            return { ...state, section: action.payload };
        default:
            return state;
    }
};