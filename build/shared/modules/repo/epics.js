'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchReposEpic = searchReposEpic;

var _Observable = require('rxjs/Observable');

var _fromPromise = require('rxjs/observable/fromPromise');

var _switchMap = require('rxjs/operator/switchMap');

var _debounceTime = require('rxjs/operator/debounceTime');

var _map = require('rxjs/operator/map');

var _api = require('./api');

var _actions = require('./actions');

function searchReposEpic(action$) {
  var _context;

  var enterSearchKeywordType = _actions.enterSearchKeyword.toString();
  var searchReposType = _actions.searchRepos.toString();

  return (_context = (_context = (_context = action$.ofType(enterSearchKeywordType), _debounceTime.debounceTime).call(_context, 500), _switchMap.switchMap).call(_context, function (action) {
    return _fromPromise.fromPromise.call(_Observable.Observable, (0, _api.searchRepos)(action.payload));
  }), _map.map).call(_context, function (result) {
    return {
      type: searchReposType + '_FULFILLED',
      payload: result
    };
  });
}