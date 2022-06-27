import axios from 'axios';
// import {BASE_URL, METHOD} from './api';
import {store} from '../store';
// import {GOOGLE_API_KEY} from '../../constants/keys';
import qs from 'qs';
import {safeGet} from '../../utils/common';

const TYPE = {
  APP: 'app',
};

export default function request(options, type) {
  return axios(options);
}

function* requestAPI(
  path,
  method,
  params = {},
  baseUrl,
  requestType = TYPE.APP,
  timeout = 30000,
) {
  // let baseUrl = BASE_URL.APP;
  let additionalPath = params.id
    ? `${path}/${params.id}${params.suffix ? '/' + params.suffix : ''}`
    : path;
  let token = store.getState().auth.token;
  let accessToken = yield token ? token : null;
  // console.log('Api First Before Result------', accessToken, token);

  let headers = {
    'Content-Type': params.formEncoded
      ? 'application/x-www-form-urlencoded'
      : params.formData
      ? 'multipart/form-data'
      : 'application/json',
    // 'Accept-Language': '*',
  };
  if (accessToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  let response = null;
  try {
    response = yield axios.request({
      url: additionalPath,
      method: method,
      baseURL: baseUrl,
      headers: headers,
      data: params.body || qs.stringify(params.formEncoded) || params.formData,
      params: params.query,
      timeout: timeout,
    });
    console.log('requestAPI ----- =  == ', response);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}

const isSuccess = response => {
  return (
    response.status === 200 &&
    safeGet(['data', 'status'], response) === 'success'
  );
};

const getData = (response, key = 'data') => {
  return (
    safeGet(['data', key], response) || safeGet([key], response) || response
  );
};

const getError = response => {
  return (
    safeGet(['error', 'response', 'data', 'err'], response) ||
    safeGet(['response', 'data', 'msg'], response) ||
    safeGet(['response', 'message'], response) ||
    safeGet(['data', 'message'], response) ||
    safeGet(['response', 'data', 'err'], response)
  );
};

export {requestAPI, TYPE, isSuccess, getData, getError};
