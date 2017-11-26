import { combineEpics } from 'redux-observable';
import { searchReposEpic } from './modules/repo/epics';

const rootEpic = combineEpics(searchReposEpic);

export default rootEpic;
