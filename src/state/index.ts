export * from './actions';
export * from './constants';

import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppState, InitialAppState } from './constants';
import { RootReducer } from './reducers';
import { RootSaga } from './sagas';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const configureStore = (initialState: AppState = InitialAppState): Store<AppState> => {
    const sagaMiddleware = createSagaMiddleware();

    const store: any = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

    store.runSagaTask = () => (store.sagaTask = sagaMiddleware.run(RootSaga as any));

    store.runSagaTask();

    return store;
};