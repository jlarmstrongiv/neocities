// Inspired by https://github.com/cereallarceny/cra-ssr/blob/master/src/store.js
// Edited middleware and rootReducer imports
// Edited initial state setter for testing purposes

import { createStore, applyMiddleware, compose, } from 'redux';
import { connectRouter, routerMiddleware, } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory, } from 'history';
import rootReducer from 'store/reducers/rootReducer';
import middlewares from 'store/reducers/middlewares';
// import createSagaMiddleware from 'redux-saga';

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const connectedFactory = (url = '/', initialState = {}) => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url,], })
    : createBrowserHistory();

  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // const sagaMiddleware = createSagaMiddleware();

  const composedEnhancers = compose(
    applyMiddleware(routerMiddleware(history), /* sagaMiddleware, */...middlewares),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  initialState = !isServer ? window.__PRELOADED_STATE__ : initialState;

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  // Create the store
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );

  return {
    store,
    history,
    // sagaMiddleware,
  };
};
