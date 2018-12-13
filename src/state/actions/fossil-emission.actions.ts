import { createAction } from '../util';
import { FossilEmissionState } from '../constants';

export type ActionsTypes = ComputeFossilEmissionsAction | SetFossilEmissionsResultAction;

export const ComputeFossilEmissionsType = '[FOSSIL_EMISSIONS] ComputeFossilEmissions';
export type ComputeFossilEmissionsAction = ReturnType<typeof ComputeFossilEmissions>;
export const ComputeFossilEmissions = () => createAction(ComputeFossilEmissionsType);

export const SetFossilEmissionsResultType = '[FOSSIL_EMISSIONS] SetFossilEmissionsResult';
export type SetFossilEmissionsResultAction = ReturnType<typeof SetFossilEmissionsResult>;
export const SetFossilEmissionsResult = (emissions: FossilEmissionState) => createAction(SetFossilEmissionsResultType, emissions);