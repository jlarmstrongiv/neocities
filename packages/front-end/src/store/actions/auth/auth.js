import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';

export const authInit = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem(localStorageTypes.TOKEN);
      const userId = localStorage.getItem(localStorageTypes.USER_ID);
      const participantId = localStorage.getItem(localStorageTypes.PARTICIPANT_ID);
      if (!participantId) {
        return dispatch(authDestroy());
      }
      dispatch(authCreate({
        token,
        userId,
        participantId,
      }));
    } catch (error) {
      dispatch(authDestroy());
    }
  };
};

export const authCreate = (auth) => {
  return async (dispatch, getState) => {
    try {
      const response = axios.get(`/initparticipant/${auth.participantId}`); // /initparticipant/${participantId}
      console.log(response.data.sessionKey);
      console.log(response.data.sessionKey);
      dispatch({
        type: actionTypes.AUTH_CREATE,
        payload: {
          token: response.data.sessionKey,
          userId: response.data.userID,
        },
      });
      localStorage.setItem(localStorageTypes.TOKEN);
      localStorage.setItem(localStorageTypes.USER_ID);
      localStorage.setItem(localStorageTypes.PARTICIPANT_ID);
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
