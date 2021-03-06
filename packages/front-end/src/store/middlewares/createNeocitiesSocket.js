import ReconnectingWebSocket from 'ReconnectingWebSocket';
import { baseUrl, } from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';

const createNeocitiesSocket = (/* url */) => {
  let rws;
  return ({ dispatch, getState, }) => next => action => {
    switch (action.type) {
      case actionTypes.SOCKET_CREATE:
        // eslint-disable-next-line no-case-declarations
        const auth = action.payload;
        rws = new ReconnectingWebSocket(`ws://${baseUrl}/ws/api/dynamic_data/${auth.token}/`);
        rws.onmessage = event => {
          let response_payload = JSON.parse(JSON.parse(event.data).text);
          console.log(response_payload);
          dispatch(response_payload);
          dispatch(JSON.parse(event.data));
        };
        break;
      case actionTypes.SOCKET_DESTORY:
        if (rws) {
          rws.close();
          rws = undefined;
        }
        break;
      case actionTypes.SOCKET_SEND:
        if (!rws || rws.readyState >= 2) {
          // the ReconnectingWebSocket has a message queue
          // throw new Error('WebSocket Closing or Closed');
        }
        rws.send(JSON.stringify(action.payload));
        break;
      default:
        // if the action is not relevant, send it to the next middleware
        return next(action);
    }
  };
};
export default createNeocitiesSocket;
