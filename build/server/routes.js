'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../shared/modules/app/App');

var _App2 = _interopRequireDefault(_App);

var _NotFound = require('../shared/components/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Home = require('../shared/modules/home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _RepoList = require('../shared/modules/repo/RepoList');

var _RepoList2 = _interopRequireDefault(_RepoList);

var _RepoDetails = require('../shared/modules/repo/RepoDetails');

var _RepoDetails2 = _interopRequireDefault(_RepoDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _App2.default,
  routes: [{
    path: '/',
    exact: true,
    component: _Home2.default
  }, {
    path: '/repos',
    component: _RepoList2.default
  }, {
    path: '/:owner/:repo',
    component: _RepoDetails2.default
  }, {
    component: _NotFound2.default
  }]
}];

exports.default = routes;