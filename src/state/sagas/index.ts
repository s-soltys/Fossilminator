import { all } from 'redux-saga/effects';
import { NavigationSagas } from './navigation.sagas';

export function* RootSaga() {
    yield all([
        ...NavigationSagas
    ]);
}