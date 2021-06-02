import { all, fork } from 'redux-saga/effects';
import MainCard from './MainCard';

export default function* RootSaga() {
  yield all([fork(MainCard)]);
}
