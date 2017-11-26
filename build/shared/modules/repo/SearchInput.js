'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _actions = require('./actions');

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchInput = function SearchInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement('input', { type: 'text', value: value, onChange: onChange })
  );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    value: (0, _selectors.getSearchKeyword)(state)
  };
};

var mapDispatchToProps = {
  enterSearchKeyword: _actions.enterSearchKeyword
};

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withHandlers2.default)({
  onChange: function onChange(props) {
    return function (event) {
      return props.enterSearchKeyword(event.target.value);
    };
  }
}));

exports.default = enhance(SearchInput);