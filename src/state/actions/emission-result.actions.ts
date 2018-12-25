import { createAction } from '../util';
import { EmissionResultState } from '../constants';

export type ActionsTypes = calculateEmissionResultsAction | SetEmissionsResultAction;

export const calculateEmissionResultsType = '[EMISSION_RESULT] calculateEmissionResults';
export type calculateEmissionResultsAction = ReturnType<typeof calculateEmissionResults>;
export const calculateEmissionResults = () => createAction(calculateEmissionResultsType);

export const SetEmissionsResultType = '[EMISSION_RESULT] SetEmissionsResult';
export type SetEmissionsResultAction = ReturnType<typeof SetEmissionsResult>;
export const SetEmissionsResult = (emissions: EmissionResultState) => createAction(SetEmissionsResultType, emissions);