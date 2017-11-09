import { createActions } from 'redux-actions';
import * as repoApi from './api';

const { searchRepos, getRepo } = createActions({
  SEARCH_REPOS: repoApi.searchRepos,
  GET_REPO: repoApi.getRepo
});

export { searchRepos, getRepo };
