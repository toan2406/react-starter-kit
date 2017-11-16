import { configureMockStore } from 'helpers';
import promise from './promise';

const mockStore = configureMockStore([promise]);

describe('promise middleware', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('should check if FSA and payload is promise', () => {
    const action = {
      type: 'foo'
    };

    store.dispatch(action);

    expect(store.getActions()).toEqual([action]);
  });

  it('should return a promise', () => {
    const action = {
      type: 'GET_DATA',
      payload: Promise.resolve('Luke')
    };

    expect(store.dispatch(action)).toBePromise();
  });

  it('should dispatch pending action', () => {
    const action = {
      type: 'GET_DATA',
      payload: Promise.resolve('Luke')
    };

    store.dispatch(action);

    expect(store.getActions()).toEqual([{ type: 'GET_DATA_PENDING' }]);
  });

  it('should dispatch fulfilled action if payload is resolved', () => {
    const action = {
      type: 'GET_DATA',
      payload: Promise.resolve('Luke')
    };

    return store.dispatch(action).then(() => {
      expect(store.getActions()).toEqual([
        { type: 'GET_DATA_PENDING' },
        { type: 'GET_DATA_FULFILLED', payload: 'Luke' }
      ]);
    });
  });

  it('should dispatch rejected action if payload is rejected', () => {
    const error = new Error();
    const action = {
      type: 'GET_DATA',
      payload: Promise.reject(error)
    };

    return store.dispatch(action).catch(() => {
      expect(store.getActions()).toEqual([
        { type: 'GET_DATA_PENDING' },
        { type: 'GET_DATA_REJECTED', payload: error, error: true }
      ]);
    });
  });
});
