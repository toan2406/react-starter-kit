import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import repoReducer from './modules/repo/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  repo: repoReducer
});

export default rootReducer;
