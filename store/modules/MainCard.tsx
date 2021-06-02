import { createAction, createReducer } from '@reduxjs/toolkit';

interface MainCardType {
  isLoading: boolean;
  mainCardData: { MainCard: any };
}

export const GET_MAIN_CARD = 'card/GET_MAIN_CARD';
export const GET_MAIN_CARD_SUCCESS = 'card/GET_MAIN_CARD_SUCCESS';
export const GET_MAIN_CARD_FAILURE = 'card/GET_MAIN_CARD_FAILURE';
export const GET_MAIN_CARD_LOADING = 'card/GET_MAIN_CARD_LOADING';

export const getMainCard = createAction(
  GET_MAIN_CARD,
  function prepare(card: any) {
    return {
      payload: {
        card
      }
    };
  }
);
export const getMainCardSuccess = createAction(
  GET_MAIN_CARD_SUCCESS,
  function prerpare(card: any) {
    return {
      payload: {
        card
      }
    };
  }
);
export const getMainCardFailure = createAction(
  GET_MAIN_CARD_FAILURE,
  function prepare(card: any) {
    return {
      payload: {
        card
      }
    };
  }
);
export const getMainCardLoading = createAction(
  GET_MAIN_CARD_LOADING,
  function prepare(card: any) {
    return {
      payload: {
        card
      }
    };
  }
);

const initialState: MainCardType = {
  isLoading: false,
  mainCardData: { MainCard: { MainCardData: { card: { data: {} } } } }
};

const reducer = createReducer(initialState, {
  [getMainCardLoading.type]: (state) => {
    state.isLoading = true;
  },
  [getMainCardSuccess.type]: (state, action) => {
    (state.isLoading = false), (state.mainCardData = action.payload);
  },
  [getMainCardFailure.type]: (state) => {
    state;
  }
});

export default reducer;
