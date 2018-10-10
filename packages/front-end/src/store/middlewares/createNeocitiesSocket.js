import ReconnectingWebSocket from 'reconnecting-websocket';
import { baseUrl, } from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';

const createNeocitiesSocket = (/* url */) => {
  let rws;
  return ({ dispatch, getState, }) => next => action => {
    switch (action.type) {
      case actionTypes.SOCKET_CREATE:
        // eslint-disable-next-line no-case-declarations
        const { auth, } = getState();
        rws = new ReconnectingWebSocket(`wss://${baseUrl}/ws/api/dynamic_data/${auth.token}`);
        rws.onmessage = event => {
          dispatch(JSON.parse(event.data));
        };
        return next();
      case actionTypes.SOCKET_DESTORY:
        rws = undefined;
        return next();
      case actionTypes.SOCKET_SEND:
        if (!rws || rws.readyState >= 2) {
          // the ReconnectingWebSocket has a message queue
          // throw new Error('WebSocket Closing or Closed');
        }
        rws.send(JSON.stringify(action));
        return next();
      default:
        // if the action is not relevant, send it to the next middleware
        return next(action);
    }
  };
};
export default createNeocitiesSocket;
