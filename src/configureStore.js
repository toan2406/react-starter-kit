import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import promise from './middlewares/promise';
import rootReducer from './rootReducer';

const configureStore = (history, preloadedState) => {
  const router = routerMiddleware(history);
  let middlewares = [router, promise];

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
