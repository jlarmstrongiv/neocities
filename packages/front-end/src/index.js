import React from 'react';
import { render, hydrate, } from 'react-dom';
import { Provider, } from 'react-redux';
import { ConnectedRouter, } from 'connected-react-router';

import * as serviceWorker from 'serviceWorker';
import { connectedFactory, } from 'utilities';
import App from 'App';

const { store, history, } = connectedFactory();

export const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(root, rootElement);
} else {
  render(root, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
