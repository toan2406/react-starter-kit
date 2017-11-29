import React from 'react';
import compose from 'recompose/compose';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import SearchInput from '../repo/SearchInput';
import RepoList from '../repo/RepoList';

const Home = () => (
  <div>
    <SearchInput />
    <RepoList />
  </div>
);

const enhance = compose(
  setDisplayName('Home'),
  setStatic('needs', RepoList.needs)
);

export default enhance(Home);
