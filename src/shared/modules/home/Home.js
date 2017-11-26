import React from 'react';
import compose from 'recompose/compose';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import Common from '../../components/Common';
import SearchInput from '../repo/SearchInput';
import RepoList from '../repo/RepoList';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <Common />
    <SearchInput />
    <RepoList />
  </div>
);

const enhance = compose(
  setDisplayName('Home'),
  setStatic('needs', RepoList.needs)
);

export default enhance(Home);
