import { AxiosResponse } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../modules/MainCard';
import { getMainPageCard } from './sagaAPI/sagaAPI';
//네이밍--------주석처리
function* getMainCard(action: { type: string; payload: string }) {
  const query = action.payload;
  try {
    const response: AxiosResponse = yield call(getMainPageCard, query);
    yield put(actions.getMainCardSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
function* getMainCardOrder(action: { type: string; payload: string }) {
  const query = action.payload;
  try {
    const response: AxiosResponse = yield call(getMainPageCard, query);
    yield put(actions.getMainCardOrderSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetMainPageCard() {
  yield takeEvery(actions.GET_MAIN_CARD, getMainCard);
  yield takeEvery(actions.GET_MAIN_CARD_ORDER, getMainCardOrder);
}
export default function* watchSaga() {
  yield fork(watchGetMainPageCard);
}
