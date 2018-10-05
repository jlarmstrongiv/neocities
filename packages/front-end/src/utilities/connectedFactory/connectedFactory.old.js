import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import {
  connectedRouter,
  routerMiddleware,
} from 'connected-react-router';
import rootReducer from 'store/reducers/rootReducer';
import middlewares from 'store/reducers/middlewares';
// History
import {
  createBrowserHistory,
  createMemoryHistory,
} from 'history';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const connectedFactory = (initialState = {}, url = '/') => {
  // History
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url,], })
    : createBrowserHistory();
  // Store
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  if (!initialState) {
    initialState = preloadedState || {};
  }

  let enhancers = [];
  if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})); // Specify extension’s options
  }
  const composeEnhancers = compose(
    applyMiddleware(routerMiddleware(history), ...middlewares),
    ...enhancers,
  );
  const store = createStore(
    connectedRouter(history)(rootReducer),
    initialState,
    composeEnhancers,
  );
  return {
    history,
    store,
  };
};
