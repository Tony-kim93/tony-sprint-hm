import { createAction, createReducer } from '@reduxjs/toolkit';

interface MainCardType {
  isLoading: boolean;
  mainCardData: { MainCard: any };
  order: string;
}

// 초기 메인페이지 50
export const GET_MAIN_CARD = 'card/GET_MAIN_CARD';
export const GET_MAIN_CARD_SUCCESS = 'card/GET_MAIN_CARD_SUCCESS';
export const GET_MAIN_CARD_FAILURE = 'card/GET_MAIN_CARD_FAILURE';
export const GET_MAIN_CARD_LOADING = 'card/GET_MAIN_CARD_LOADING';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const GET_MAIN_CARD_ORDER = 'GET_MAIN_CARD_ORDER';
export const GET_MAIN_CARD_ORDER_SUCCESS = 'GET_MAIN_CARD_ORDER_SUCCESS';
export const getMainCard = createAction(
  GET_MAIN_CARD,
  function prepare(query: any) {
    return {
      payload: query
    };
  }
);
export const getMainCardSuccess = createAction(
  GET_MAIN_CARD_SUCCESS,
  function prepare(card: any) {
    return {
      payload: {
        card
      }
    };
  }
);
export const getMainCardFailure = createAction(
  GET_MAIN_CARD_FAILURE,
  function prepare(asd: any) {
    return {
      payload: asd
    };
  }
);
export const getMainCardLoading = createAction(
  GET_MAIN_CARD_LOADING,
  function prepare(www: any) {
    return {
      payload: www
    };
  }
);

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

export const getMainCardOrderSuccess = createAction(
  GET_MAIN_CARD_ORDER_SUCCESS,
  function prepare(card) {
    return {
      payload: card
    };
  }
);

const initialState: MainCardType = {
  isLoading: false,
  mainCardData: { MainCard: { card: [] } },
  order: 'ASC'
};

const reducer = createReducer(initialState, {
  [getMainCardLoading.type]: (state) => {
    state.isLoading = true;
  },
  [getMainCardSuccess.type]: (state, action) => {
    (state.isLoading = false),
      state.mainCardData.MainCard.card.push(...action.payload.card);
  },
  [getMainCardFailure.type]: (state) => {
    state;
  },
  [changeOrder.type]: (state, action) => {
    state.order = action.payload;
  },
  [getMainCardOrderSuccess.type]: (state, action) => {
    state.mainCardData.MainCard.card = action.payload;
  }
});

export default reducer;
