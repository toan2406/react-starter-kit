import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import { repo as repoSchema } from './schemas';

const getRepoEntities = state => state.repo.repoEntities;
const getOwnerEntities = state => state.repo.ownerEntities;
const getRepoIds = state => state.repo.repoIds;

const getRepos = createSelector(
  [getRepoEntities, getOwnerEntities, getRepoIds],
  (repoEntities, ownerEntities, repoIds) =>
    denormalize(repoIds, [repoSchema], {
      owners: ownerEntities,
      repos: repoEntities
    })
);

export { getRepos };
