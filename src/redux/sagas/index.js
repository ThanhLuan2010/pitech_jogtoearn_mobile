import {all} from 'redux-saga/effects';
import {watchUserLoginLocal, watchUserRegisterLocal} from './auth.saga';

export default function* rootSaga() {
  yield all([watchUserLoginLocal(), watchUserRegisterLocal()]);
}
