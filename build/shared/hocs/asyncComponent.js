'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = asyncComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function asyncComponent(getComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(AsyncComponent, _React$Component);

    function AsyncComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, AsyncComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = { Component: AsyncComponent.Component }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AsyncComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        if (!this.state.Component) {
          AsyncComponent.load().then(function (Component) {
            _this2.setState({ Component: Component });
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var Component = this.state.Component;

        if (Component) {
          return _react2.default.createElement(Component, this.props);
        }
        return null;
      }
    }], [{
      key: 'load',
      value: function load() {
        return getComponent().then(function (module) {
          return module.default ? module.default : module;
        }).then(function (Component) {
          AsyncComponent.Component = Component;
          return Component;
        });
      }
    }]);

    return AsyncComponent;
  }(_react2.default.Component), _class.Component = null, _temp2;
}