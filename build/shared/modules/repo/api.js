'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepo = exports.searchRepos = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _normalizr = require('normalizr');

var _schemas = require('./schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchRepos = function searchRepos(_ref) {
  var token = _ref.token,
      _ref$keyword = _ref.keyword,
      keyword = _ref$keyword === undefined ? '' : _ref$keyword,
      _ref$language = _ref.language,
      language = _ref$language === undefined ? 'javascript' : _ref$language,
      _ref$sort = _ref.sort,
      sort = _ref$sort === undefined ? 'stars' : _ref$sort,
      _ref$order = _ref.order,
      order = _ref$order === undefined ? 'desc' : _ref$order,
      _ref$perPage = _ref.perPage,
      perPage = _ref$perPage === undefined ? 10 : _ref$perPage;

  var url = 'https://api.github.com/search/repositories?q=' + keyword + '+language:' + language + '&sort=' + sort + '&order=' + order + '&per_page=' + perPage;
  return (0, _isomorphicFetch2.default)(url).then(function (res) {
    return res.json();
  }).then(function (_ref2) {
    var items = _ref2.items;
    return (0, _normalizr.normalize)(items, [_schemas.repo]);
  });
};

var getRepo = function getRepo(_ref3) {
  var token = _ref3.token,
      owner = _ref3.owner,
      repo = _ref3.repo;

  var url = 'https://api.github.com/repos/' + owner + '/' + repo;
  return (0, _isomorphicFetch2.default)(url).then(function (res) {
    return res.json();
  }).then(function (repo) {
    return (0, _normalizr.normalize)(repo, _schemas.repo);
  });
};

exports.searchRepos = searchRepos;
exports.getRepo = getRepo;