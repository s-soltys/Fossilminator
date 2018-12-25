import { takeEvery, put, select } from 'redux-saga/effects';
import { EmissionResultActions, EmissionInputActions } from '../actions';
import { AppState } from '../constants';
import { calculateFossilEmissions } from '../../emission-calculator';

export const CalculateFossilEmissionsaga = function* () {
    const usage = yield select<AppState>(state => state.fossilUsage);

    const emission = calculateFossilEmissions(usage);

    yield put(EmissionResultActions.SetEmissionsResult(emission));
};

export const FossilEmissionSagas = [
    takeEvery([
        EmissionInputActions.UpdatePublicTransportType,
        EmissionInputActions.UpdateFoodType
    ], CalculateFossilEmissionsaga)
];