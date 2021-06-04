import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import MainCard from './MainCard';

// const RootReducer = combineReducers({
//   MainCard
// });
const RootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('===========HYDRATE=============');
      console.log(action.payload);
      console.log(state);
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        MainCard
      });
      return combineReducer(state, action);
    }
  }
};

export default RootReducer;
