const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const UPDATE = 'UPDATE';

const defaultTypes = [REQUEST, SUCCESS, FAILURE, UPDATE];

function createRequestTypes(base, types = defaultTypes) {
  const res = {};
  types.forEach(type => (res[type] = `${base}_${type}`));
  return res;
}

export {REQUEST, SUCCESS, FAILURE, UPDATE};

export const APP = createRequestTypes('APP', [
  'START',
  'READY',
  'INIT',
  'SET_STACK_ROOT',
]);

// User Actions
export const USER_REGISTER = createRequestTypes('USER_REGISTER');

export const USER_LOGIN_LOCAL = createRequestTypes('USER_LOGIN_LOCAL');
//Common
export const USER_CHANGE_LANGUAGE = 'USER_CHANGE_LANGUAGE';

export const USER_CHANGE_SOUND = 'USER_CHANGE_SOUND';

export const USER_LOGOUT = 'USER_LOGOUT';
