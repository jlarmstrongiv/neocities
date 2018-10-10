import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';
import { SOCKET_CREATE, } from 'store/actions/actionTypes';

export const authInit = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem(localStorageTypes.TOKEN);
      const userId = localStorage.getItem(localStorageTypes.USER_ID);
      const participantId = localStorage.getItem(localStorageTypes.PARTICIPANT_ID);
      const timeStart = localStorage.setItem(localStorageTypes.TIME_START);
      const simulatedTimeSpeed = localStorage.setItem(localStorageTypes.SIMULATED_TIME_SPEED);

      if (!participantId) {
        return dispatch(authDestroy());
      }
      dispatch(authCreate({
        token,
        userId,
        participantId,
        timeStart,
        simulatedTimeSpeed,
      }));
    } catch (error) {
      dispatch(authDestroy());
    }
  };
};

export const authCreate = (auth) => {
  return async (dispatch, getState) => {
    try {
      const { dataTODO, } = await axios.get(`/initparticipant/${auth.participantId}/`); // /initparticipant/${participantId}
      const data = {
        'sessionKey': 'sessionKey',
        'userID': 1,
        'participantId': 'participantID',
        'timeStart': '2018-06-29T07:36:26Z',
        'simulatedTimeSpeed': 3,
      };
      dispatch({
        type: actionTypes.AUTH_CREATE,
        payload: {
          token: data.sessionKey,
          userId: data.userID,
          participantId: data.participantId,
          timeStart: data.timeStart, // Date object not needed by react-moment
          simulatedTimeSpeed: data.simulatedTimeSpeed,
        },
      });
      dispatch({ type: actionTypes.SOCKET_CREATE, });
      localStorage.setItem(localStorageTypes.TOKEN);
      localStorage.setItem(localStorageTypes.USER_ID);
      localStorage.setItem(localStorageTypes.PARTICIPANT_ID);
      localStorage.setItem(localStorageTypes.TIME_START);
      localStorage.setItem(localStorageTypes.SIMULATED_TIME_SPEED);
    } catch (error) {
      dispatch(authDestroy());
      console.error(error);
    }
  };
};

export const authDestroy = () => {
  return async (dispatch, getState) => {
    try {
      window.sessionStorage.clear();
      window.localStorage.clear();
      dispatch({ type: actionTypes.AUTH_DESTROY, });
      dispatch({ type: actionTypes.SOCKET_DESTORY, });
      dispatch({ type: `${actionTypes.PREFIXES_CHAT}_${actionTypes.ITEMS_DESTROY}`, });
      dispatch({ type: `${actionTypes.PREFIXES_RESOURCES}_${actionTypes.ITEMS_DESTROY}`, });
      dispatch({ type: `${actionTypes.PREFIXES_TASKS}_${actionTypes.ITEMS_DESTROY}`, });
      dispatch({ type: `${actionTypes.PREFIXES_BRIEFINGS}_${actionTypes.ITEMS_DESTROY}`, });
    } catch (error) {
      console.error(error);
    }
  };
};
