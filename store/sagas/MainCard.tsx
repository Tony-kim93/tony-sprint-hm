import { AxiosResponse } from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../modules/MainCard';
import { getMainPageCard } from './sagaAPI/sagaAPI';

function* getMainCard() {
  try {
    const response: AxiosResponse = yield call(getMainPageCard);
    yield put(actions.getMainCardSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetMainPageCard() {
  yield takeLatest(actions.GET_MAIN_CARD, getMainCard);
}

export default function* watchSaga() {
  yield fork(watchGetMainPageCard);
}
