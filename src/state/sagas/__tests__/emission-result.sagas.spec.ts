import { calculateEmissionResultSaga } from "../emission-result.sagas";
import { call, put } from "redux-saga/effects";
import { calculateEmissionResults } from "../../../emission-calculator";
import { EmissionResultActions } from "../..";

describe('Emission result sagas should', () => {
    it('calculate emission', () => {
        const emissionInput: any = { param: 100 };
        const emissionResult: any = { result: 200 };

        const saga = calculateEmissionResultSaga();

        saga.next();

        const calculateCall = saga.next(emissionInput).value;

        const effectCall = saga.next(emissionResult).value;

        expect(calculateCall).toEqual(call(calculateEmissionResults, emissionInput));

        expect(effectCall).toEqual(put(EmissionResultActions.SetEmissionsResult(emissionResult)));
    });
});