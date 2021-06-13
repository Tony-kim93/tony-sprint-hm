import { createAction, createReducer } from '@reduxjs/toolkit';

export const CHANGE_ORDER = 'CHANGE_ORDER';
export const GET_MAIN_CARD_ORDER = 'GET_MAIN_CARD_ORDER';
// export const GET_MAIN_CARD_ORDER_SUCCESS = 'GET_MAIN_CARD_ORDER_SUCCESS';

export const changeOrder = createAction(CHANGE_ORDER, function prepare(order) {
  return {
    payload: order
  };
});

export const getMainCardOrder = createAction(
  GET_MAIN_CARD_ORDER,
  function prepare(query: string) {
    return {
      payload: query
    };
  }
);

// export const getMainCardOrderSuccess = createAction(
//   GET_MAIN_CARD_ORDER_SUCCESS,
//   function prepare(card: any) {
//     return {
//       payload: card
//     };
//   }
// );

const initialState: { value: string } = {
  value: ''
};

const reducer = createReducer(initialState, {
  [changeOrder.type]: (state, action) => {
    state.value = action.payload;
  }
  // [getMainCardOrderSuccess.type]: (state, action) => {
  //   state.mainCardData.MainCard.card = action.payload;
  // },
});

export default reducer;
