import { handleActions } from 'redux-actions';
import { searchRepos, getRepo } from './actions';
import { types } from '../../middlewares/promise';
import { Map } from '../../helpers/simpleImmutable';

const { PENDING, FULFILLED, REJECTED } = types;
const INITIAL_STATE = {
  ownerEntities: {},
  repoEntities: {},
  repoIds: [],
  selectedRepo: null,
  error: null
};

export default handleActions({
  [`${searchRepos}_${PENDING}`]: state =>
    Map(state)
      .set({
        ownerEntities: {},
        repoEntities: {},
        repoIds: [],
        selectedRepo: null,
        error: null
      })
      .get(),

  [`${searchRepos}_${FULFILLED}`]: (state, { payload: { entities, result } }) =>
    Map(state)
      .set({
        ownerEntities: entities.owners,
        repoEntities: entities.repos,
        repoIds: result,
        error: null
      })
      .get(),

  [`${searchRepos}_${REJECTED}`]: (state, { payload }) =>
    Map(state)
      .set({
        ownerEntities: {},
        repoEntities: {},
        repoIds: [],
        error: payload
      })
      .get(),

  [`${getRepo}_${PENDING}`]: state =>
    Map(state)
      .set({
        ownerEntities: {},
        repoEntities: {},
        repoIds: [],
        selectedRepo: null,
        error: null
      })
      .get(),

  [`${getRepo}_${FULFILLED}`]: (state, { payload: { entities, result } }) =>
    Map(state)
      .set({
        ownerEntities: entities.owners,
        repoEntities: entities.repos,
        selectedRepo: result,
        error: null
      })
      .get(),

  [`${getRepo}_${REJECTED}`]: (state, { payload }) =>
    Map(state)
      .set({
        ownerEntities: {},
        repoEntities: {},
        selectedRepo: null,
        error: payload
      })
      .get()
}, INITIAL_STATE);
