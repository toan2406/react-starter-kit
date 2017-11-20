'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _simpleImmutable = require('./simpleImmutable');

describe('simpleImmutable', function () {
  var state = {
    posts: ['foo', 'bar', 'baz'],
    selectedPost: 'foo'
  };

  it('should have a get method', function () {
    var mapFunctor = (0, _simpleImmutable.Map)(state).set('selectedPost', 'baz');
    expect(typeof mapFunctor === 'undefined' ? 'undefined' : _typeof(mapFunctor)).toEqual('object');
    expect(mapFunctor.get).toBeDefined();
  });

  it('should not mutate original object', function () {
    var nextState = (0, _simpleImmutable.Map)(state).set({
      selectedPost: 'bar'
    }).get();
    expect(nextState.selectedPost).toEqual('bar');
    expect(state).not.toBe(nextState);
    expect(state.posts).toBe(nextState.posts);
  });

  it('should support key-value setter', function () {
    var nextState = (0, _simpleImmutable.Map)(state).set('posts', []).get();
    expect(state.posts).toEqual(['foo', 'bar', 'baz']);
    expect(nextState.posts).toEqual([]);
  });

  it('should ignore unhandled exception', function () {
    var nextState = (0, _simpleImmutable.Map)(state).set().set(null).get();
    expect(state).toBe(nextState);
  });
});