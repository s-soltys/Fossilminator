import { takeEvery, put, select, call } from 'redux-saga/effects';
import { EmissionResultActions, EmissionInputActions } from '../actions';
import { AppState } from '../constants';
import { calculateEmissionResults } from '../../emission-calculator';

export const calculateEmissionResultSaga = function* () {
    const emissionInput = yield select<AppState>(state => state.emissionInput);

    const emissionResult = yield call(calculateEmissionResults, emissionInput);

    yield put(EmissionResultActions.SetEmissionsResult(emissionResult));
};

export const EmissionResultSagas = [
    takeEvery([
        EmissionResultActions.CalculateEmissionResultsType,
        EmissionInputActions.UpdatePublicTransportType,
        EmissionInputActions.UpdateFoodType
    ], calculateEmissionResultSaga)
];