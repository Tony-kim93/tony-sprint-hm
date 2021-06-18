import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../store/modules/rootReducer';
import rootSaga from './sagas/rootSaga';
import { createWrapper } from 'next-redux-wrapper';

const makeStore: any = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    devTools: true,
    middleware: middlewares,
    reducer: rootReducer
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
