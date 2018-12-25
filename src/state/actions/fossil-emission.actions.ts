import { createAction } from '../util';
import { EmissionResultState } from '../constants';

export type ActionsTypes = ComputeFossilEmissionsAction | SetFossilEmissionsResultAction;

export const ComputeFossilEmissionsType = '[FOSSIL_EMISSIONS] ComputeFossilEmissions';
export type ComputeFossilEmissionsAction = ReturnType<typeof ComputeFossilEmissions>;
export const ComputeFossilEmissions = () => createAction(ComputeFossilEmissionsType);

export const SetFossilEmissionsResultType = '[FOSSIL_EMISSIONS] SetFossilEmissionsResult';
export type SetFossilEmissionsResultAction = ReturnType<typeof SetFossilEmissionsResult>;
export const SetFossilEmissionsResult = (emissions: EmissionResultState) => createAction(SetFossilEmissionsResultType, emissions);