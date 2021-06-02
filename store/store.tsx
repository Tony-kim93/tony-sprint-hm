import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './modules/RootReducer';
import RootSaga from './sagas/RootSaga';
import { createWrapper } from 'next-redux-wrapper';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

// export const store = configureStore({
//   devTools: true,
//   middleware: middlewares,
//   reducer: RootReducer
// });

// sagaMiddleware.run(RootSaga);
const makeStore = () => {
  const store = configureStore({
    devTools: true,
    middleware: middlewares,
    reducer: RootReducer
  });
  sagaMiddleware.run(RootSaga);
  return store;
};

export const wrapper: any = createWrapper(makeStore, { debug: false });
