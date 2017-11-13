'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../src/modules/app/App');

var _App2 = _interopRequireDefault(_App);

var _RepoList = require('../src/modules/repo/RepoList');

var _RepoList2 = _interopRequireDefault(_RepoList);

var _RepoDetails = require('../src/modules/repo/RepoDetails');

var _RepoDetails2 = _interopRequireDefault(_RepoDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _App2.default,
  routes: [{
    component: _RepoList2.default,
    path: '/',
    exact: true
  }, {
    component: _RepoDetails2.default,
    path: '/repos'
  }]
}];

exports.default = routes;