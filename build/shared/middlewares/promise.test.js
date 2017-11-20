'use strict';

var _helpers = require('helpers');

var _promise = require('./promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockStore = (0, _helpers.configureMockStore)([_promise2.default]);

describe('promise middleware', function () {
  var store = void 0;

  beforeEach(function () {
    store = mockStore();
  });

  it('should check if FSA and payload is promise', function () {
    var action = {
      type: 'foo'
    };

    store.dispatch(action);

    expect(store.getActions()).toEqual([action]);
  });

  it('should return a promise', function () {
    var action = {
      type: 'GET_DATA',
      payload: Promise.resolve('Luke')
    };

    expect(store.dispatch(action)).toBePromise();
  });

  it('should dispatch pending action', function () {
    var action = {
      type: 'GET_DATA',
      payload: Promise.resolve('Luke')
    };

    store.dispatch(action);

    expect(store.getActions()).toEqual([{ type: 'GET_DATA_PENDING' }]);
  });

  it('should dispatch fulfilled action if payload is resolved', function () {
    var action = {
      type: 'GET_DATA',
      payload: Promise.resolve('Luke')
    };

    return store.dispatch(action).then(function () {
      expect(store.getActions()).toEqual([{ type: 'GET_DATA_PENDING' }, { type: 'GET_DATA_FULFILLED', payload: 'Luke' }]);
    });
  });

  it('should dispatch rejected action if payload is rejected', function () {
    var error = new Error();
    var action = {
      type: 'GET_DATA',
      payload: Promise.reject(error)
    };

    return store.dispatch(action).catch(function () {
      expect(store.getActions()).toEqual([{ type: 'GET_DATA_PENDING' }, { type: 'GET_DATA_REJECTED', payload: error, error: true }]);
    });
  });
});