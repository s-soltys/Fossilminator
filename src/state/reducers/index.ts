import { combineReducers } from 'redux';
import { NavigationReducer } from './navigation.reducer';
import { emissionInputReducer } from './emission-input.reducer';
import { emissionResultReducer } from './emission-result.reducer';

export const RootReducer = combineReducers({
    navigation: NavigationReducer,
    emissionInput: emissionInputReducer,
    emissionResult: emissionResultReducer
});