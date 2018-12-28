import { all } from 'redux-saga/effects';
import { NavigationSagas } from './navigation.sagas';
import { EmissionResultSagas } from './emission-result.sagas';
import { EmissionInputSagas } from './emission-input.sagas';

export function* RootSaga() {
    yield all([
        ...NavigationSagas,
        ...EmissionInputSagas,
        ...EmissionResultSagas
    ]);
}