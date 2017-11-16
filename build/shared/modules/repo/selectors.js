'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRepo = exports.getRepos = undefined;

var _reselect = require('reselect');

var _normalizr = require('normalizr');

var _schemas = require('./schemas');

var getRepoEntities = function getRepoEntities(state) {
  return state.repo.repoEntities;
};
var getOwnerEntities = function getOwnerEntities(state) {
  return state.repo.ownerEntities;
};
var getRepoIds = function getRepoIds(state) {
  return state.repo.repoIds;
};
var getSelectedRepoId = function getSelectedRepoId(state) {
  return state.repo.selectedRepo;
};

var getRepos = (0, _reselect.createSelector)([getRepoEntities, getOwnerEntities, getRepoIds], function (repoEntities, ownerEntities, repoIds) {
  return (0, _normalizr.denormalize)(repoIds, [_schemas.repo], {
    owners: ownerEntities,
    repos: repoEntities
  });
});

var getSelectedRepo = (0, _reselect.createSelector)([getRepoEntities, getOwnerEntities, getSelectedRepoId], function (repoEntities, ownerEntities, selectedRepoId) {
  return (0, _normalizr.denormalize)(selectedRepoId, _schemas.repo, {
    owners: ownerEntities,
    repos: repoEntities
  });
});

exports.getRepos = getRepos;
exports.getSelectedRepo = getSelectedRepo;