import nock from 'nock';
import { configureMockStore, sleep } from 'helpers';
import { createEpicMiddleware } from 'redux-observable';
import { searchReposEpic } from './epics';
import { enterSearchKeyword, searchRepos } from './actions';

const enterSearchKeywordType = enterSearchKeyword.toString();
const searchReposType = searchRepos.toString();
const epicMiddleware = createEpicMiddleware(searchReposEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('repo epic', () => {
  const apiResponse = {
    items: [
      {
        id: 'r1',
        name: 'react',
        owner: { id: 'o1', login: 'facebook' }
      },
      {
        id: 'r2',
        name: 'react-native',
        owner: { id: 'o1', login: 'facebook' }
      }
    ]
  };
  const normalizedData = {
    entities: {
      owners: {
        o1: { id: 'o1', login: 'facebook' }
      },
      repos: {
        r1: { id: 'r1', name: 'react', owner: 'o1' },
        r2: { id: 'r2', name: 'react-native', owner: 'o1' }
      }
    },
    result: ['r1', 'r2']
  };
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(searchReposEpic);
  });

  it('produces the repo model', () => {
    nock('https://api.github.com')
      .get('/search/repositories')
      .query(true)
      .reply(200, apiResponse);

    store.dispatch(enterSearchKeyword('re'));
    store.dispatch(enterSearchKeyword('react'));

    return sleep(1000).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: enterSearchKeywordType,
          payload: { keyword: 're' }
        },
        {
          type: enterSearchKeywordType,
          payload: { keyword: 'react' }
        },
        {
          type: `${searchReposType}_FULFILLED`,
          payload: normalizedData
        }
      ]);
    });
  });
});
