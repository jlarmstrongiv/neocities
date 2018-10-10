import ReconnectingWebSocket from 'reconnecting-websocket';
import { baseUrl, } from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
// https://github.com/StephenGrider/AdvancedReduxCode/blob/master/middleware/src/middlewares/async.js
// https://github.com/StephenGrider/AdvancedReduxCode/blob/master/middleware/src/middlewares/stateValidator.js

// switch (action.type) {
//   case actionTypes.AUTH_CREATE:
//     return authCreate(state, action);
//   case actionTypes.AUTH_DESTROY:
//     return authDestroy(state, action);
//   default:
//     return state;
// }

// rws.onmessage = event => {
//   let action = JSON.parse(event.data);
// };
// rws.send(JSON.stringify(action));


const createNeocitiesSocket = url => {
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




// Check to see if the action
// has a promise on its 'payload' property
// If it does, then wait for it to resolve
// If it doesn't, then send the action on to the
// next middleware
// if (!action.payload || !action.payload.then) {
//   return next(action);
// }

// We want to wait for the promise to resolve
// (get its data!!) and then create a new action
// with that data and dispatch it
//     action.payload.then((response) => {
//       const newAction = {
//         ...action,
//         payload: response,
//       };
//       dispatch(newAction);
//     });
//   };
// };
