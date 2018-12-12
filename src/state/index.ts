export * from './actions';
export * from './constants';

import { Component } from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga'
// import withRedux from 'next-redux-wrapper';
// import withReduxSaga from 'next-redux-saga';
// import { RootSaga } from './sagas';
import { RootReducer } from './reducers';
import { InitialAppState } from './constants';
import { AppState } from './constants';
import { RootSaga } from './sagas';

// Configure Redux Dev Tools
// let composeEnhancers = compose;
// if ((process as any).browser) {
//     composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
// }

// const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState: AppState = InitialAppState): Store<AppState> => {
    const store: any = createStore(RootReducer);

    // store.runSagaTask = () => (store.sagaTask = sagaMiddleware.run(RootSaga));

    // store.runSagaTask();

    return store;
};

// export const connectWithRedux = (component: Component) => withRedux(configureStore)(withReduxSaga(component as any) as any);

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//   RootReducer,
//   applyMiddleware(sagaMiddleware)
// )

// // then run the saga
// sagaMiddleware.run(RootSaga as any);