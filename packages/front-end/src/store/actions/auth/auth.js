import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';

// check to see if state auth already exists == do nothing
// if no state auth, then check localStorage auth and re-verify with server and set state
// if no state auth or local storage, just clear everything

export const authInit = () => {
  return async (dispatch, getState) => {
    try {
      const { auth, } = getState();
      if (auth.token && auth.userId && auth.participantId) {
        return;
      }
      const localAuth = {
        token: localStorage.getItem(localStorageTypes.TOKEN),
        userId: localStorage.getItem(localStorageTypes.USER_ID),
        participantId: localStorage.getItem(localStorageTypes.PARTICIPANT_ID),
      };
      if (localAuth.token && localAuth.userId && localAuth.participantId) {
        return dispatch(authCreate(localAuth));
      }
      dispatch(authDestroy());
    } catch (error) {
      dispatch(authDestroy());
    }
  };
};

export const authCreate = (auth) => {
  return async (dispatch, getState) => {
    try {
      const { data, } = await axios.get(`/initparticipant/${auth.participantId}`);
      const verifiedAuth = {
        token: data.sessionKey,
        userId: data.userID,
        participantId: auth.participantId,
      };
      dispatch({
        type: actionTypes.AUTH_CREATE,
        payload: verifiedAuth,
      });

      dispatch({
        type: actionTypes.SOCKET_CREATE,
        payload: verifiedAuth,
      });

      localStorage.setItem(localStorageTypes.TOKEN, auth.token);
      localStorage.setItem(localStorageTypes.USER_ID, auth.userId);
      localStorage.setItem(localStorageTypes.PARTICIPANT_ID, auth.participantId);
    } catch (error) {
      dispatch(authDestroy());
      console.error(error);
    }
  };
};

export const authDestroy = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.AUTH_DESTROY, });
      dispatch({ type: actionTypes.SOCKET_DESTORY, });

      window.sessionStorage.clear();
      window.localStorage.clear();

      dispatch({ type: `${actionTypes.PREFIXES_CHAT}_${actionTypes.ITEMS_DESTROY}`, });
      dispatch({ type: `${actionTypes.PREFIXES_RESOURCES}_${actionTypes.ITEMS_DESTROY}`, });
      dispatch({ type: `${actionTypes.PREFIXES_TASKS}_${actionTypes.ITEMS_DESTROY}`, });
      dispatch({ type: `${actionTypes.PREFIXES_BRIEFINGS}_${actionTypes.ITEMS_DESTROY}`, });
    } catch (error) {
      console.error(error);
    }
  };
};
