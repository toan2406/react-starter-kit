'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPromise;
function isPromise(val) {
  return val && typeof val.then === 'function';
}