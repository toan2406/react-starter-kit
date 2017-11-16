'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reducer = require('./modules/app/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./modules/repo/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  router: _reactRouterRedux.routerReducer,
  app: _reducer2.default,
  repo: _reducer4.default
});

exports.default = rootReducer;