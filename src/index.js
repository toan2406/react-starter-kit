import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import routes from './routes';

const history = createHistory();
const store = configureStore(history, window.__INITIAL_STATE__);

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);
