import { createActions } from 'redux-actions';
import * as repoApi from './api';

const { searchRepos, getRepo, enterSearchKeyword } = createActions({
  SEARCH_REPOS: repoApi.searchRepos,
  GET_REPO: repoApi.getRepo,
  ENTER_SEARCH_KEYWORD: keyword => ({ keyword })
});

export { searchRepos, getRepo, enterSearchKeyword };
