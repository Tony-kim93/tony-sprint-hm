import { createAction, createReducer } from '@reduxjs/toolkit';

// 초기 메인페이지 50
export const GET_MAIN_CARD = 'card/GET_MAIN_CARD';
export const GET_MAIN_CARD_SUCCESS = 'card/GET_MAIN_CARD_SUCCESS';
export const GET_MAIN_CARD_FAILURE = 'card/GET_MAIN_CARD_FAILURE';
export const GET_MAIN_CARD_LOADING = 'card/GET_MAIN_CARD_LOADING';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const GET_MAIN_CARD_ORDER = 'GET_MAIN_CARD_ORDER';
export const GET_MAIN_CARD_ORDER_SUCCESS = 'GET_MAIN_CARD_ORDER_SUCCESS';
export const GET_SEARCH_CARD = 'GET_SEARCH_CARD';
export const GET_SEARCH_CARD_SUCCESS = 'GET_SEARCH_CARD_SUCCESS';

export const getMainCard = createAction(
  GET_MAIN_CARD,
  //   function prepare(query: any) {
  //     return {
  //       payload: query
  //     };
  //   }
  // );
  function prepare(limit, pageSet, value: any) {
    return {
      payload: {
        limit,
        pageSet,
        value
      }
    };
  }
);

export const getMainCardSuccess = createAction(
  GET_MAIN_CARD_SUCCESS,
  function prepare(card: any) {
    return {
      payload: card
    };
  }
);
// export const getMainCardFailure = createAction(
//   GET_MAIN_CARD_FAILURE,
//   function prepare(asd: any) {
//     return {
//       payload: asd
//     }
//   }
// );
// export const getMainCardLoading = createAction(
//   GET_MAIN_CARD_LOADING,
//   function prepare(www: any) {
//     return {
//       payload: www
//     };
//   }
// );

export const getMainCardOrder = createAction(
  GET_MAIN_CARD_ORDER,
  function prepare(limit, pageSet, value: any) {
    return {
      payload: {
        limit,
        pageSet,
        value
      }
    };
  }
);

export const getMainCardOrderSuccess = createAction(
  GET_MAIN_CARD_ORDER_SUCCESS,
  function prepare(card: any) {
    return {
      payload: card
    };
  }
);

export const getSearchCard = createAction(
  GET_SEARCH_CARD,
  function prepare(query: any) {
    return {
      payload: query
    };
  }
);

export const getSearchCardSuccess = createAction(
  GET_SEARCH_CARD_SUCCESS,
  function prepare(card: any) {
    return {
      payload: card
    };
  }
);

const initialState: any = {
  isLoading: false,
  card: []
};

const reducer = createReducer(initialState, {
  [getMainCardSuccess.type]: (state, action) => {
    (state.isLoading = false), state.card.push(...action.payload);
  },
  [getMainCardOrderSuccess.type]: (state, action) => {
    state.card = action.payload;
  },
  [getSearchCardSuccess.type]: (state, action) => {
    state.card = action.payload;
  }
});

export default reducer;
