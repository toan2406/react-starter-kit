import React from 'react';

const NotFound = ({ location }) => (
  <h1>
    <code>{location.pathname}</code> not found
  </h1>
);

export default NotFound;
