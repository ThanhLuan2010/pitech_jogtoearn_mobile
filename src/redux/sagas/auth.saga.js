import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import {requestAPI, getData, getError} from '../services/request';
import {PATH, METHOD, BASE_URL} from '../services/api';

function* userLoginLocal(action) {
  let response = action.params;
  try {
    response = yield call(
      requestAPI,
      PATH.LOGIN,
      METHOD.POST,
      action.params,
      BASE_URL.APP_WP,
    );
    console.log('userLoginLocal', response);
    let success =
      (response.status === 200 || response.status === 201) &&
      response.data.code === 200;
    if (action.onComplete) {
      action.onComplete({
        success: success,
        data: success ? getData(response) : getError(response),
        message: response.data.message,
      });
    }
    if (response.data?.data?.require_auth) {
      yield put({type: types.USER_LOGIN_LOCAL[types.FAILURE], error: response});
    } else {
      if (success) {
        yield put({
          type: types.USER_LOGIN_LOCAL[types.SUCCESS],
          data: response.data,
          message: response.data.message,
        });
      } else {
        yield put({
          type: types.USER_LOGIN_LOCAL[types.FAILURE],
          error: response,
        });
      }
    }
  } catch (e) {
    console.log(e);
    if (action.onComplete) {
      action.onComplete({
        success: false,
        data: e.message,
      });
    }
    yield put({type: types.USER_LOGIN_LOCAL[types.FAILURE], error: e});
  }
}

export function* watchUserLoginLocal() {
  yield takeLatest(types.USER_LOGIN_LOCAL[types.REQUEST], userLoginLocal);
}

//register

function* userRegisterLocal(action) {
  let response = action.params;
  let method = action.method;
  try {
    response = yield call(
      requestAPI,
      PATH.REGISTER,
      METHOD.POST,
      action.params,
      BASE_URL.APP_WP,
    );
    let success =
      (response.status === 200 || response.status === 201) &&
      response.data.code == 200;
    if (action.onComplete) {
      action.onComplete({
        success: success,
        data: success ? getData(response) : getError(response),
      });
    }
    if (success) {
      yield put({
        type: types.USER_REGISTER[types.SUCCESS],
        data: response.data,
      });
    } else {
      yield put({
        type: types.USER_REGISTER[types.FAILURE],
        error: getError(response),
      });
    }
  } catch (e) {
    console.log(e);
    if (action.onComplete) {
      action.onComplete({
        success: false,
        data: e,
      });
    }
    yield put({type: types.USER_REGISTER[types.FAILURE], error: e});
  }
}

export function* watchUserRegisterLocal() {
  yield takeLatest(types.USER_REGISTER[types.REQUEST], userRegisterLocal);
}
