export * from './actions';
export * from './constants';

import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppState, InitialAppState } from './constants';
import { RootReducer } from './reducers';
import { RootSaga } from './sagas';

// Configure Redux Dev Tools
// let composeEnhancers = compose;
// if ((process as any).browser) {
//     composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
// }

export const configureStore = (initialState: AppState = InitialAppState): Store<AppState> => {
    const sagaMiddleware = createSagaMiddleware();

    const store: any = createStore(RootReducer, applyMiddleware(sagaMiddleware));

    store.runSagaTask = () => (store.sagaTask = sagaMiddleware.run(RootSaga as any));

    store.runSagaTask();

    return store;
};