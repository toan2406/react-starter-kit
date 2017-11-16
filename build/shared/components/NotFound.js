'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'h1',
    null,
    _react2.default.createElement(
      'code',
      null,
      location.pathname
    ),
    ' not found'
  );
};

exports.default = NotFound;