import { all } from 'redux-saga/effects';
import { NavigationSagas } from './navigation.sagas';
import { FossilEmissionSagas } from './fossil-emission.sagas';

export function* RootSaga() {
    yield all([
        ...NavigationSagas,
        ...FossilEmissionSagas
    ]);
}