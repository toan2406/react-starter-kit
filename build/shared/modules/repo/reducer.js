'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

var _promise = require('../../middlewares/promise');

var _simpleImmutable = require('../../helpers/simpleImmutable');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PENDING = _promise.types.PENDING,
    FULFILLED = _promise.types.FULFILLED,
    REJECTED = _promise.types.REJECTED;

var INITIAL_STATE = {
  ownerEntities: {},
  repoEntities: {},
  repoIds: [],
  selectedRepo: null,
  error: null
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.searchRepos + '_' + PENDING, function undefined(state) {
  return (0, _simpleImmutable.Map)(state).set({
    ownerEntities: {},
    repoEntities: {},
    repoIds: [],
    selectedRepo: null,
    error: null
  }).get();
}), _defineProperty(_handleActions, _actions.searchRepos + '_' + FULFILLED, function undefined(state, _ref) {
  var _ref$payload = _ref.payload,
      entities = _ref$payload.entities,
      result = _ref$payload.result;
  return (0, _simpleImmutable.Map)(state).set({
    ownerEntities: entities.owners,
    repoEntities: entities.repos,
    repoIds: result,
    error: null
  }).get();
}), _defineProperty(_handleActions, _actions.searchRepos + '_' + REJECTED, function undefined(state, _ref2) {
  var payload = _ref2.payload;
  return (0, _simpleImmutable.Map)(state).set({
    ownerEntities: {},
    repoEntities: {},
    repoIds: [],
    error: payload
  }).get();
}), _defineProperty(_handleActions, _actions.getRepo + '_' + PENDING, function undefined(state) {
  return (0, _simpleImmutable.Map)(state).set({
    ownerEntities: {},
    repoEntities: {},
    repoIds: [],
    selectedRepo: null,
    error: null
  }).get();
}), _defineProperty(_handleActions, _actions.getRepo + '_' + FULFILLED, function undefined(state, _ref3) {
  var _ref3$payload = _ref3.payload,
      entities = _ref3$payload.entities,
      result = _ref3$payload.result;
  return (0, _simpleImmutable.Map)(state).set({
    ownerEntities: entities.owners,
    repoEntities: entities.repos,
    selectedRepo: result,
    error: null
  }).get();
}), _defineProperty(_handleActions, _actions.getRepo + '_' + REJECTED, function undefined(state, _ref4) {
  var payload = _ref4.payload;
  return (0, _simpleImmutable.Map)(state).set({
    ownerEntities: {},
    repoEntities: {},
    selectedRepo: null,
    error: payload
  }).get();
}), _handleActions), INITIAL_STATE);