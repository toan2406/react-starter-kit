import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import promise from './middlewares/promise';
import rootReducer from './rootReducer';

const configureStore = (history, preloadedState) => {
  const router = routerMiddleware(history);
  const logger = createLogger({ collapsed: true });
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(router, promise, logger)
  );

  return store;
};

export default configureStore;
