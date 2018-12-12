export enum Section {
    None = 'NONE',
    Welcome = 'WELCOME',
    Transport = 'TRANSPORT'
}

export interface NavigationState {
    section: Section;
}

export interface AppState {
    navigation: NavigationState;
}