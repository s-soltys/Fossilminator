import { all } from 'redux-saga/effects';
import { NavigationSagas } from './navigation.sagas';
import { EmissionResultSagas } from './emission-result.sagas';

export function* RootSaga() {
    yield all([
        ...NavigationSagas,
        ...EmissionResultSagas
    ]);
}