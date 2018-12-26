import { takeEvery, put } from 'redux-saga/effects';
import { NavigationActions } from '../actions';
import { LocaleConfig } from '../../i18n';

export const logOnNavigateSaga = function* (action: NavigationActions.SetNavigationSectionAction) {
    yield put(NavigationActions.DetermineNavigationSection());
};

export const setLocaleSaga = function*(action: NavigationActions.SetLocaleAction) {
    LocaleConfig.changeLocale(action.payload);
}

export const NavigationSagas = [
    takeEvery(NavigationActions.SetNavigationSectionType, logOnNavigateSaga),
    takeEvery(NavigationActions.SetLocaleType, setLocaleSaga)
];