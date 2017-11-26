'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxObservable = require('redux-observable');

var _reduxLogger = require('redux-logger');

var _promise = require('./middlewares/promise');

var _promise2 = _interopRequireDefault(_promise);

var _rootReducer = require('./rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _rootEpic = require('./rootEpic');

var _rootEpic2 = _interopRequireDefault(_rootEpic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore(history, preloadedState) {
  var epic = (0, _reduxObservable.createEpicMiddleware)(_rootEpic2.default);
  var router = (0, _reactRouterRedux.routerMiddleware)(history);
  var middlewares = [router, _promise2.default, epic];

  if (__CLIENT__ && __DEV__) {
    var logger = (0, _reduxLogger.createLogger)({ collapsed: true });
    middlewares.push(logger);
  }

  var store = (0, _redux.createStore)(_rootReducer2.default, preloadedState, _redux.applyMiddleware.apply(undefined, middlewares));

  return store;
};

exports.default = configureStore;