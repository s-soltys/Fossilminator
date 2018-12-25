import { takeEvery, put, select } from 'redux-saga/effects';
import { EmissionResultActions, EmissionInputActions } from '../actions';
import { AppState } from '../constants';
import { calculateEmissionResults } from '../../emission-calculator';

export const calculateEmissionResultSaga = function* () {
    const usage = yield select<AppState>(state => state.emissionInput);

    const emission = calculateEmissionResults(usage);

    yield put(EmissionResultActions.SetEmissionsResult(emission));
};

export const EmissionResultSagas = [
    takeEvery([
        EmissionInputActions.UpdatePublicTransportType,
        EmissionInputActions.UpdateFoodType
    ], calculateEmissionResultSaga)
];