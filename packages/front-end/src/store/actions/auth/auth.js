import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';
export const localStorageCheck = () => {
  return;
};


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
