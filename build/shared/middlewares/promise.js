'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = promiseMiddleware;

var _fluxStandardAction = require('flux-standard-action');

var _isPromise = require('../helpers/isPromise');

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = exports.types = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

function promiseMiddleware(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      var type = action.type,
          payload = action.payload;


      if (!(0, _fluxStandardAction.isFSA)(action) || !(0, _isPromise2.default)(payload)) {
        return next(action);
      }

      var PENDING = types.PENDING,
          FULFILLED = types.FULFILLED,
          REJECTED = types.REJECTED;


      var handleFulfill = function handleFulfill(result) {
        dispatch(_extends({}, action, {
          type: type + '_' + FULFILLED,
          payload: result
        }));
        return Promise.resolve(result);
      };

      var handleReject = function handleReject(error) {
        dispatch(_extends({}, action, {
          type: type + '_' + REJECTED,
          payload: error,
          error: true
        }));
        return Promise.reject(error);
      };

      next({ type: type + '_' + PENDING });

      return payload.then(handleFulfill, handleReject);
    };
  };
}