import * as types from '../actions/types';

const INITIAL = {
  language: 'en',
  isPlaySound: true,
};

const commonReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case types.USER_CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.params,
      };
    case types.USER_CHANGE_SOUND:
      return {
        ...state,
        isPlaySound: action.params,
      };
    default:
      return state;
  }
};

export default commonReducer;
