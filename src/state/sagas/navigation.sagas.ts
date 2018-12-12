import { takeEvery } from 'redux-saga/effects';
import { NavigationActions } from '../actions';

export const logOnNavigateSaga = function* (action: NavigationActions.SetNavigationSectionAction) {
    console.log('***SAGA', action);
};

export const NavigationSagas = [
    takeEvery(NavigationActions.SetNavigationSectionType, logOnNavigateSaga)
];