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
      // const { data, } = await axios.get(`/initparticipant/${auth.participantId}/`); // /initparticipant/${participantId}
      const data = {
        'sessionKey': 'sessionKey',
        'userID': 1,
        'participantId': 'participantID',
      };
      const auth = {
        token: data.sessionKey,
        userId: data.userID,
        participantId: data.participantId,
      };
      dispatch({
        type: actionTypes.AUTH_CREATE,
        payload: { auth, },
      });

      dispatch({
        type: actionTypes.SOCKET_CREATE,
        payload: { auth , },
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
