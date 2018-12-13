import { takeEvery, put, select } from 'redux-saga/effects';
import { FossilEmissionActions, FossilUsageActions } from '../actions';
import { AppState } from '../constants';
import { calculateFossilEmissions } from '../../fossil-usage';

export const computeFossilEmissionSaga = function*() {
    const usage = yield select<AppState>(state => state.fossilUsage);

    const emission = calculateFossilEmissions(usage);
    
    yield put(FossilEmissionActions.SetFossilEmissionsResult(emission));
};

export const FossilEmissionSagas = [
    takeEvery(FossilUsageActions.PatchTransportUsageType, computeFossilEmissionSaga)
];