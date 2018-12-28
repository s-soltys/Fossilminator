import { takeEvery, put } from 'redux-saga/effects';
import { NavigationActions, EmissionInputActions } from '../actions';
import { LocaleConfig } from '../../i18n';

export const initAppSaga = function* () {
    yield put(EmissionInputActions.SetCountryCode('pl'));
}

export const logOnNavigateSaga = function* (action: NavigationActions.SetNavigationSectionAction) {
    yield put(NavigationActions.DetermineNavigationSection());
}

export const setLocaleSaga = function*(action: NavigationActions.SetLocaleAction) {
    LocaleConfig.changeLocale(action.payload);
}

export const NavigationSagas = [
    takeEvery(NavigationActions.InitAppType, initAppSaga),
    takeEvery(NavigationActions.SetNavigationSectionType, logOnNavigateSaga),
    takeEvery(NavigationActions.SetLocaleType, setLocaleSaga)
];