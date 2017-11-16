'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repo = exports.owner = undefined;

var _normalizr = require('normalizr');

var owner = new _normalizr.schema.Entity('owners');
var repo = new _normalizr.schema.Entity('repos', { owner: owner });

exports.owner = owner;
exports.repo = repo;