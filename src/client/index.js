import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from '../shared/modules/intl';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../shared/configureStore';
import * as Bundles from './AsyncBundles';
import routes from './routes';

const history = createHistory();
const store = configureStore(history, window.__INITIAL_STATE__);

Promise.all(
  window.__SPLIT_POINTS__
    .filter(chunk => Bundles[chunk])
    .map(chunk => Bundles[chunk].load())
).then(() => {
  hydrate(
    <Provider store={store}>
      <IntlProvider>
        <ConnectedRouter history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
      </IntlProvider>
    </Provider>,
    document.getElementById('react-root')
  );
});
