import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
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

    {renderRoutes(route.routes)}
  </div>
);

export default App;
