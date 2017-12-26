import React from 'react';
import { configureMockStore, mountWithStore } from 'helpers';
import RepoDetails from './RepoDetails';

const mockStore = configureMockStore();

const populatedState = {
  app: {
    isInit: false
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
    selectedRepo: 3,
    error: null
  }
};

describe('RepoDetails component', () => {
  it('should show repo details', () => {
    const store = mockStore(populatedState);
    const match = { params: { owner: 'vuejs', repo: 'vue' } };
    const wrapper = mountWithStore(
      <RepoDetails.WrappedComponent match={match} />,
      store
    );

    expect(wrapper.find('h2').first().text()).toBe('vue');
  });
});
