// @flow
import { isFSA } from 'flux-standard-action';
import isPromise from '../helpers/isPromise';

type Action = Object;
type Store = {
  getState: () => Object,
  dispatch: Action => mixed
};

export const types = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

export default function promiseMiddleware(store: Store) {
  return (next: Action => mixed) => (action: Action) => {
    const { type, payload } = action;

    if (!isFSA(action) || !isPromise(payload)) {
      return next(action);
    }

    const { PENDING, FULFILLED, REJECTED } = types;

    const handleFulfill = result => {
      store.dispatch({
        ...action,
        type: `${type}_${FULFILLED}`,
        payload: result
      });
      return Promise.resolve(result);
    };

    const handleReject = error => {
      store.dispatch({
        ...action,
        type: `${type}_${REJECTED}`,
        payload: error,
        error: true
      });
      return Promise.reject(error);
    };

    next({ type: `${type}_${PENDING}` });

    return payload.then(handleFulfill, handleReject);
  };
}
