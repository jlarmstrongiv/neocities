import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';

export const authInit = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem(localStorageTypes.TOKEN);
      const userId = localStorage.getItem(localStorageTypes.USER_ID);
      dispatch(login({
        token,
        userId,
      }));
    } catch (error) {
      dispatch(logout());
    }
  };
};

export const login = (auth) => {
  return async (dispatch, getState) => {
    try {
      const response = axios.post('/login', auth);
      if (response.data) {
        dispatch({
          type: actionTypes.AUTH_LOGIN,
          payload: {
            token: auth.token,
            userId: auth.userId,
          },
        });
      } else {
        dispatch(logout());
      }
    } catch (error) {
      dispatch(logout());
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    try {
      window.sessionStorage.clear();
      window.localStorage.clear();
      dispatch({ type: actionTypes.AUTH_RESET, });
      // AUTH_RESET
      // CHAT_RESET
      // RESOURCE_RESET
      // Etc.
    } catch (error) {
      console.log(error);
    }
  };
};
