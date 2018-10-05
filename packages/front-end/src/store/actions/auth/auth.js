import * as actionTypes from 'store/actions/actionTypes';

export const init = () => {
  return {
    type: actionTypes.AUTH_INIT,
    payload: '',
  };
};

export const login = () => {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload: '',
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload: '',
  };
};
