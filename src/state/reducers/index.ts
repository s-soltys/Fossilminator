import { combineReducers } from 'redux';
import { NavigationReducer } from './navigation.reducer';
import { FossilUsageReducer } from './fossil-usage.reducer';
import { FossilEmissionReducer } from './fossil-emission.reducer';

export const RootReducer = combineReducers({
    navigation: NavigationReducer,
    fossilUsage: FossilUsageReducer,
    fossilEmission: FossilEmissionReducer
});