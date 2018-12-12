import { createAction } from '../util';
import { Section } from '../constants';

export type ActionsTypes = SetNavigationSectionAction | DetermineNavigationSectionAction;

export const SetNavigationSectionType = '[NAVIGATION] SetNavigationSection';
export type SetNavigationSectionAction = ReturnType<typeof SetNavigationSection>;
export const SetNavigationSection = (section: Section) => createAction(SetNavigationSectionType, section);

export const DetermineNavigationSectionType = '[NAVIGATION] DetermineNavigationSection';
export type DetermineNavigationSectionAction = ReturnType<typeof DetermineNavigationSection>;
export const DetermineNavigationSection = () => createAction(DetermineNavigationSectionType);