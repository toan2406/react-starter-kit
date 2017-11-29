import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import promise from './middlewares/promise';
import block from './middlewares/block';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const configureStore = (history, preloadedState) => {
  const epic = createEpicMiddleware(rootEpic);
  const router = routerMiddleware(history);
  let middlewares = [router, thunk, promise, epic];

  if (__CLIENT__) {
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
    middlewares.unshift(block);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
