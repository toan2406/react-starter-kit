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

var _reactTransitionGroup = require('react-transition-group');

var _FadeTransition = require('../../components/FadeTransition');

var _FadeTransition2 = _interopRequireDefault(_FadeTransition);

var _renderRoutes = require('../../helpers/renderRoutes');

var _renderRoutes2 = _interopRequireDefault(_renderRoutes);

var _actions = require('./actions');

var _logo = '/logo.svg';

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'header': 'app__header',
  'content-wrapper': 'app__content-wrapper',
  'content': 'app__content',
  'contentWrapper': 'app__content-wrapper'
};


var App = function App(_ref) {
  var route = _ref.route,
      location = _ref.location;

  var currentKey = location.pathname.split('/')[1];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { className: styles.header },
      _react2.default.createElement('img', { src: _logo2.default, height: '30' }),
      ' Welcome to React!'
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
      )
    ),
    _react2.default.createElement(
      _reactTransitionGroup.TransitionGroup,
      { className: styles.contentWrapper },
      _react2.default.createElement(
        _FadeTransition2.default,
        { key: currentKey },
        _react2.default.createElement(
          'main',
          { className: styles.content },
          (0, _renderRoutes2.default)(route.routes, location)
        )
      )
    )
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