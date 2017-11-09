import { isFSA } from 'flux-standard-action';
import isPromise from '../helpers/isPromise';

export const types = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    const { type, payload } = action;

    if (!isFSA(action) || !isPromise(payload)) {
      return next(action);
    }

    const { PENDING, FULFILLED, REJECTED } = types;

    const handleFulfill = result => {
      dispatch({
        ...action,
        type: `${type}_${FULFILLED}`,
        payload: result
      });
      return Promise.resolve(result);
    };

    const handleReject = error => {
      dispatch({
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
