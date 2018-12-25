import { createAction } from '../util';
import { EmissionResultState } from '../constants';

export type ActionsTypes = CalculateFossilEmissionsAction | SetEmissionsResultAction;

export const CalculateFossilEmissionsType = '[EMISSION_RESULT] CalculateFossilEmissions';
export type CalculateFossilEmissionsAction = ReturnType<typeof CalculateFossilEmissions>;
export const CalculateFossilEmissions = () => createAction(CalculateFossilEmissionsType);

export const SetEmissionsResultType = '[EMISSION_RESULT] SetEmissionsResult';
export type SetEmissionsResultAction = ReturnType<typeof SetEmissionsResult>;
export const SetEmissionsResult = (emissions: EmissionResultState) => createAction(SetEmissionsResultType, emissions);