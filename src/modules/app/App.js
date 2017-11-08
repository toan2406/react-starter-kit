import React from 'react';
import { Route, Link } from 'react-router-dom';
import RepoList from '../repo/RepoList';
import RepoDetails from '../repo/RepoDetails';

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
