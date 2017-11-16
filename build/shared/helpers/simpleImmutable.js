'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Map = Map;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Functor = function () {
  function _Functor(value) {
    _classCallCheck(this, _Functor);

    this.value = value;
  }

  _createClass(_Functor, [{
    key: 'get',
    value: function get() {
      return this.value;
    }
  }]);

  return _Functor;
}();

var _Map = function (_Functor2) {
  _inherits(_Map, _Functor2);

  function _Map() {
    _classCallCheck(this, _Map);

    return _possibleConstructorReturn(this, (_Map.__proto__ || Object.getPrototypeOf(_Map)).apply(this, arguments));
  }

  _createClass(_Map, [{
    key: 'set',
    value: function set() {
      if (_typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object' && (arguments.length <= 0 ? undefined : arguments[0]) !== null) {
        var newValue = _extends({}, this.value, arguments.length <= 0 ? undefined : arguments[0]);
        return new _Map(newValue);
      }

      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string' && arguments.length >= 2) {
        var _newValue = _extends({}, this.value, _defineProperty({}, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]));
        return new _Map(_newValue);
      }

      return this;
    }
  }]);

  return _Map;
}(_Functor);

function Map(value) {
  return new _Map(value);
}