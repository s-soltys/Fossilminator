import { createAction } from '../util';
import { Section } from '../constants';

export type ActionsTypes = SetNavigationSectionAction;

export const SetNavigationSectionType = '[NAVIGATION] SetNavigationSection';
export type SetNavigationSectionAction = ReturnType<typeof SetNavigationSection>;
export const SetNavigationSection = (section: Section) => createAction(SetNavigationSectionType, section);