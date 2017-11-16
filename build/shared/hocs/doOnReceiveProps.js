'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doOnReceiveProps;

var _lifecycle = require('recompose/lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doOnReceiveProps(callback) {
  return (0, _lifecycle2.default)({
    componentWillMount: function componentWillMount() {
      callback(this.props);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      callback(nextProps);
    }
  });
}