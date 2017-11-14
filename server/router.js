import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';
import createHistory from 'history/createMemoryHistory';
import configureStore from '../src/configureStore';
import routes from './routes';
import fetchComponentData from './helpers/fetchComponentData';
import extractSplitPoints from './helpers/extractSplitPoints';

const router = express.Router();

router.use((req, res, next) => {
  const history = createHistory();
  const store = configureStore(history);
  const currentRoute = matchRoutes(routes, req.originalUrl);

  store.dispatch(push(req.originalUrl));

  fetchComponentData(store.dispatch, currentRoute)
    .then(data => {
      const html = renderToString(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            {renderRoutes(routes)}
          </ConnectedRouter>
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
