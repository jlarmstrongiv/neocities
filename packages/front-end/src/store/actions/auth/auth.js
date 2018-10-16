import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';

// check to see if state auth already exists == do nothing
// if no state auth, then check localStorage auth and re-verify with server and set state
// if no state auth or local storage, just clear everything

export const authIsLoading = payload => {
  return {
    type: actionTypes.AUTH_IS_LOADING,
    payload,
  };
};

export const authIsError = payload => {
  return {
    type: actionTypes.AUTH_IS_ERROR,
    payload,
  };
};

export const authInit = () => {
  return async (dispatch, getState) => {
    try {
      const { auth, } = getState();
      if (auth.token && auth.userId && auth.participantId && auth.roleId) {
        return;
      }
      const localAuth = localStorage.getItem(actionTypes.PREFIXES_AUTH);
      if (localAuth && localAuth.token && localAuth.userId && localAuth.participantId && localAuth.roleId) {
        return dispatch(authFetch(localAuth));
      }
      // dispatch(authDestroy());
    } catch (error) {
      dispatch(authDestroy());
    }
  };
};

export const authFetch = (auth) => {
  return async (dispatch, getState) => {
    try {
      dispatch(authIsError({ isError: false, }));
      dispatch(authIsLoading({ isLoading: true, }));

      const { data, } = await axios.get(`/initparticipant/${auth.participantId}`);
      const verifiedAuth = {
        token: data.sessionKey,
        userId: data.userID,
        participantId: auth.participantId,
        roleId: data.roleID,
        chatSession: data.chatSessions
      };


      dispatch({
        type: actionTypes.AUTH_CREATE,
        payload: verifiedAuth,
      });
      dispatch({
        type: actionTypes.SOCKET_CREATE,
        payload: verifiedAuth,
      });
      dispatch(authIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.PREFIXES_AUTH, auth);
    } catch (error) {
      dispatch(authDestroy());
      dispatch(authIsLoading({ isLoading: false, }));
      dispatch(authIsError({ isError: error, }));
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
