import { createAction } from '../util';
import { Section } from '../constants';

export type ActionsTypes = InitAppAction | SetNavigationSectionAction | DetermineNavigationSectionAction;

export const InitAppType = '[NAVIGATION] InitApp';
export type InitAppAction = ReturnType<typeof InitApp>;
export const InitApp = () => createAction(InitAppType);

export const SetNavigationSectionType = '[NAVIGATION] SetNavigationSection';
export type SetNavigationSectionAction = ReturnType<typeof SetNavigationSection>;
export const SetNavigationSection = (section: Section) => createAction(SetNavigationSectionType, section);

export const DetermineNavigationSectionType = '[NAVIGATION] DetermineNavigationSection';
export type DetermineNavigationSectionAction = ReturnType<typeof DetermineNavigationSection>;
export const DetermineNavigationSection = () => createAction(DetermineNavigationSectionType);

export const SetLocaleType = '[NAVIGATION] SetLocale';
export type SetLocaleAction = ReturnType<typeof SetLocale>;
export const SetLocale = (locale: string) => createAction(SetLocaleType, locale);