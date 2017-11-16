'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  firstRender: true
};

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _actions.setFirstRender, function (state, _ref) {
  var payload = _ref.payload;
  return {
    firstRender: !!payload
  };
}), INITIAL_STATE);