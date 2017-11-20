'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('helpers');

var _RepoDetails = require('./RepoDetails');

var _RepoDetails2 = _interopRequireDefault(_RepoDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockStore = (0, _helpers.configureMockStore)();

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
    selectedRepo: 3,
    error: null
  }
};

describe('RepoDetails component', function () {
  it('has correct display name', function () {
    expect(_RepoDetails2.default.displayName).toBe('RepoDetails');
  });

  it('should show repo details', function () {
    var store = mockStore(populatedState);
    var match = { params: { owner: 'vuejs', repo: 'vue' } };
    var wrapper = (0, _helpers.mountWithStore)(_react2.default.createElement(_RepoDetails2.default, { match: match }), store);

    expect(wrapper.find('h2').first().text()).toBe('vue');
  });
});