// https://github.com/StephenGrider/AdvancedReduxCode/blob/master/middleware/src/middlewares/async.js
// https://github.com/StephenGrider/AdvancedReduxCode/blob/master/middleware/src/middlewares/stateValidator.js

export default ({ dispatch, getState, }) => next => action => {
  // Check to see if the action
  // has a promise on its 'payload' property
  // If it does, then wait for it to resolve
  // If it doesn't, then send the action on to the
  // next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the promise to resolve
  // (get its data!!) and then create a new action
  // with that data and dispatch it
  action.payload.then((response) => {
    const newAction = {
      ...action,
      payload: response,
    };
    dispatch(newAction);
  });
};

// https://stackoverflow.com/questions/51831824/where-to-store-class-instance-for-reusability-in-redux
// https://gist.github.com/markerikson/3df1cf5abbac57820a20059287b4be58
const createMySocketMiddleware = (url) => {
  let socket;

  return storeAPI => next => action => {
    switch (action.type) {
      case 'LOGIN': {
        socket = createMyWebsocket(url);

        socket.on('message', (message) => {
          storeAPI.dispatch({
            type: 'SOCKET_MESSAGE_RECEIVED',
            payload: message,
          });
        });
        break;
      }
      case 'SEND_WEBSOCKET_MESSAGE': {
        socket.send(action.payload);
        return;
      }
    }

    return next(action);
  };
};
