'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicDir = exports.viewDir = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewDir = exports.viewDir = _path2.default.join(__dirname, '../build/views');
var publicDir = exports.publicDir = _path2.default.join(__dirname, '../build/public');