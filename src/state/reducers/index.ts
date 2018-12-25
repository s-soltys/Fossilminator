import { combineReducers } from 'redux';
import { NavigationReducer } from './navigation.reducer';
import { emissionInputReducer } from './fossil-usage.reducer';
import { emissionResultReducer } from './fossil-emission.reducer';

export const RootReducer = combineReducers({
    navigation: NavigationReducer,
    emissionInput: emissionInputReducer,
    emissionResult: emissionResultReducer
});