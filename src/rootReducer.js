import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './modules/app/reducer';
import repoReducer from './modules/repo/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  app: appReducer,
  repo: repoReducer
});

export default rootReducer;
