import React from 'react';
import { Route, Link } from 'react-router-dom';
import Bundle from '../../components/Bundle';

const loadRepoList = () =>
  import(/* webpackChunkName: "RepoList" */ '../repo/RepoList');
const loadRepoDetails = () =>
  import(/* webpackChunkName: "RepoDetails" */ '../repo/RepoDetails');

const RepoList = props => (
  <Bundle load={loadRepoList}>
    {RepoList => <RepoList {...props} />}
  </Bundle>
);

const RepoDetails = props => (
  <Bundle load={loadRepoDetails}>
    {RepoDetails => <RepoDetails {...props} />}
  </Bundle>
);

const App = () => (
  <div>
    <h1>Welcome to React!</h1>

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/repos">Details</Link>
      </li>
    </ul>

    <Route exact path="/" component={RepoList} />
    <Route path="/repos" component={RepoDetails} />
  </div>
);

export default App;
