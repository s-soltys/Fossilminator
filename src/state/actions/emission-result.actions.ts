import { createAction } from '../util';
import { EmissionResultState } from '../constants';

export type ActionsTypes = CalculateEmissionResultsAction | SetEmissionsResultAction;

export const CalculateEmissionResultsType = '[EMISSION_RESULT] CalculateEmissionResults';
export type CalculateEmissionResultsAction = ReturnType<typeof CalculateEmissionResults>;
export const CalculateEmissionResults = () => createAction(CalculateEmissionResultsType);

export const SetEmissionsResultType = '[EMISSION_RESULT] SetEmissionsResult';
export type SetEmissionsResultAction = ReturnType<typeof SetEmissionsResult>;
export const SetEmissionsResult = (emissions: EmissionResultState) => createAction(SetEmissionsResultType, emissions);