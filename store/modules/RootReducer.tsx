import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import mainPage from './mainPageReducer';
import order from './orderReducer';
import * as TYPE from '../../interface/index';

const RootReducer = (state: TYPE.stateProps, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        mainPage,
        order
      });
      return combineReducer(state, action);
    }
  }
};

export default RootReducer;
