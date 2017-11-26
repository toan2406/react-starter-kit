'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxObservable = require('redux-observable');

var _epics = require('./modules/repo/epics');

var rootEpic = (0, _reduxObservable.combineEpics)(_epics.searchReposEpic);

exports.default = rootEpic;