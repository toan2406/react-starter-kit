import React from 'react';
import { configureMockStore, mountWithStore } from 'helpers';
import RepoList from './RepoList';

const mockStore = configureMockStore();

const initialState = {
  app: {
    firstRender: true
  },
  repo: {
    ownerEntities: {},
    repoEntities: {},
    repoIds: [],
    error: null
  }
};

const populatedState = {
  app: {
    firstRender: false
  },
  repo: {
    ownerEntities: {
      1: { id: 1, login: 'facebook' },
      2: { id: 2, login: 'vuejs' }
    },
    repoEntities: {
      1: { id: 1, name: 'react', owner: 1 },
      2: { id: 2, name: 'react-native', owner: 1 },
      3: { id: 3, name: 'vue', owner: 2 }
    },
    repoIds: [1, 2, 3],
    error: null
  }
};

describe('RepoList component', () => {
  it('has correct display name', () => {
    expect(RepoList.displayName).toBe('RepoList');
  });

  it('should render list of repos', () => {
    const store = mockStore(populatedState);
    const wrapper = mountWithStore(<RepoList />, store);
    const listItems = wrapper.find('li');

    expect(listItems).toHaveLength(3);
    expect(listItems.first().text()).toContain('react');
  });

  it('should dispatch a push action when an item is clicked', () => {
    const store = mockStore(populatedState);
    store.dispatch = jest.fn();
    const wrapper = mountWithStore(<RepoList />, store);
    const listItems = wrapper.find('li');

    listItems.at(0).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith({
      type: '@@router/CALL_HISTORY_METHOD',
      payload: {
        method: 'push',
        args: ['/facebook/react']
      }
    });
  });
});
