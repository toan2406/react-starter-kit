'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('helpers');

var _RepoList = require('./RepoList');

var _RepoList2 = _interopRequireDefault(_RepoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockStore = (0, _helpers.configureMockStore)();

var initialState = {
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

var populatedState = {
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

describe('RepoList component', function () {
  it('has correct display name', function () {
    expect(_RepoList2.default.displayName).toBe('RepoList');
  });

  it('should not dispatch searchRepos on first render', function () {
    var store = mockStore(initialState);
    store.dispatch = jest.fn();
    var wrapper = (0, _helpers.mountWithStore)(_react2.default.createElement(_RepoList2.default, null), store);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('should render list of repos', function () {
    var store = mockStore(populatedState);
    var wrapper = (0, _helpers.mountWithStore)(_react2.default.createElement(_RepoList2.default, null), store);
    var listItems = wrapper.find('li');

    expect(listItems).toHaveLength(3);
    expect(listItems.first().text()).toBe('react');
  });

  it('should dispatch a push action when an item is clicked', function () {
    var store = mockStore(populatedState);
    store.dispatch = jest.fn();
    var wrapper = (0, _helpers.mountWithStore)(_react2.default.createElement(_RepoList2.default, null), store);
    var listItems = wrapper.find('li');

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