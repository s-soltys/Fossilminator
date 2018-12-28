import { takeEvery, put } from 'redux-saga/effects';
import { EmissionInputActions } from '../actions';
import { getEnergeticMixPerCountry } from '../../emission-calculator';

export const setEnergeticMixSaga = function* (action: EmissionInputActions.SetCountryCodeAction) {
    const mix = getEnergeticMixPerCountry(action.payload);

    yield put(EmissionInputActions.SetEnergeticMix(mix));
};

export const EmissionInputSagas = [
    takeEvery(EmissionInputActions.SetCountryCodeType, setEnergeticMixSaga)
];