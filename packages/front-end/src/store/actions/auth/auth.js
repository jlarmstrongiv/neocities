import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';

export const authInit = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem(localStorageTypes.TOKEN);
      const userId = localStorage.getItem(localStorageTypes.USER_ID);
      dispatch(authCreate({
        token,
        userId,
      }));
    } catch (error) {
      dispatch(authDestroy());
    }
  };
};

export const authCreate = (auth) => {
  return async (dispatch, getState) => {
    try {
      const response = axios.post('/login', auth);
      if (response.data) {
        dispatch({
          type: actionTypes.AUTH_CREATE,
          payload: {
            token: auth.token,
            userId: auth.userId,
          },
        });
      } else {
        dispatch(authDestroy());
      }
    } catch (error) {
      dispatch(authDestroy());
    }
  };
};

export const authDestroy = () => {
  return async (dispatch, getState) => {
    try {
      window.sessionStorage.clear();
      window.localStorage.clear();
      dispatch({ type: actionTypes.AUTH_DESTROY, });
      // AUTH_DESTROY
      // CHAT_RESET
      // RESOURCE_RESET
      // Etc.
    } catch (error) {
      console.log(error);
    }
  };
};
