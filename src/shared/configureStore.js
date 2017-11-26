import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import promise from './middlewares/promise';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const configureStore = (history, preloadedState) => {
  const epic = createEpicMiddleware(rootEpic);
  const router = routerMiddleware(history);
  let middlewares = [router, promise, epic];

  if (__CLIENT__ && __DEV__) {
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
