export * from './actions';
export * from './constants';

import { Component } from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import withRedux from 'next-redux-wrapper';
// import withReduxSaga from 'next-redux-saga';
// import { RootSaga } from './sagas';
import { RootReducer } from './reducers';
import { InitialAppState } from './constants';
import { AppState } from './constants';

// Configure Redux Dev Tools
// let composeEnhancers = compose;
// if ((process as any).browser) {
//     composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
// }

// const sagaMiddleware = createSagaMiddleware();

// const configureStore = (initialState: AppState = InitialAppState): Store<AppState> => {
//     const store: any = createStore(RootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

//     store.runSagaTask = () => (store.sagaTask = sagaMiddleware.run(RootSaga));

//     store.runSagaTask();

//     return store;
// };

// export const connectWithRedux = (component: Component) => withRedux(configureStore)(withReduxSaga(component as any) as any);