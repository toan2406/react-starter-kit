import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { IntlProvider } from '../shared/modules/intl';
import { ConnectedRouter } from 'react-router-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';
import createHistory from 'history/createMemoryHistory';
import configureStore from '../shared/configureStore';
import routes from './routes';
import fetchComponentData from './helpers/fetchComponentData';
import extractSplitPoints from './helpers/extractSplitPoints';

const router = express.Router();

router.use((req, res, next) => {
  const history = createHistory({ initialEntries: [req.originalUrl] });
  const store = configureStore(history);
  const currentRoute = matchRoutes(routes, history.location.pathname);

  fetchComponentData(store.dispatch, currentRoute)
    .then(data => {
      const html = renderToString(
        <Provider store={store}>
          <IntlProvider>
            <ConnectedRouter history={history}>
              {renderRoutes(routes)}
            </ConnectedRouter>
          </IntlProvider>
        </Provider>
      );

      const splitPoints = extractSplitPoints(currentRoute);
      const initialState = store.getState();

      res.render('index', {
        title: 'React Starter Kit',
        initialState: JSON.stringify(initialState),
        splitPoints: JSON.stringify(splitPoints),
        html
      });
    })
    .catch(err => next(err));
});

export default router;
