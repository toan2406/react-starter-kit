import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

const configureStore = (history, preloadedState) => {
  const middleware = routerMiddleware(history);
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(middleware)
  );

  return store;
};

export default configureStore;
