import { combineReducers } from 'redux';
import { NavigationReducer } from './navigation.reducer';

export const RootReducer = combineReducers({
    navigation: NavigationReducer
});