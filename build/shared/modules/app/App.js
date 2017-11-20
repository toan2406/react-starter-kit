'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _lifecycle = require('recompose/lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _reactRouterDom = require('react-router-dom');

var _reactRouterConfig = require('react-router-config');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'app': 'app__app'
};


var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    { className: styles.app },
    _react2.default.createElement(
      'h1',
      null,
      'Welcome to React!'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/repos' },
          'Top Repos'
        )
      )
    ),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

var mapDispatchToProps = {
  setFirstRender: _actions.setFirstRender
};

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(null, mapDispatchToProps), (0, _lifecycle2.default)({
  componentDidMount: function componentDidMount() {
    this.props.setFirstRender(false);
  }
}));

exports.default = enhance(App);