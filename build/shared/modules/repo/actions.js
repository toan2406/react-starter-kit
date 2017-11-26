'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enterSearchKeyword = exports.getRepo = exports.searchRepos = undefined;

var _reduxActions = require('redux-actions');

var _api = require('./api');

var repoApi = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _createActions = (0, _reduxActions.createActions)({
  SEARCH_REPOS: repoApi.searchRepos,
  GET_REPO: repoApi.getRepo,
  ENTER_SEARCH_KEYWORD: function ENTER_SEARCH_KEYWORD(keyword) {
    return { keyword: keyword };
  }
}),
    searchRepos = _createActions.searchRepos,
    getRepo = _createActions.getRepo,
    enterSearchKeyword = _createActions.enterSearchKeyword;

exports.searchRepos = searchRepos;
exports.getRepo = getRepo;
exports.enterSearchKeyword = enterSearchKeyword;