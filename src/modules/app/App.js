import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { setFirstRender } from './actions';

const App = ({ route }) => (
  <div>
    <h1>Welcome to React!</h1>

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/repos">Top Repos</Link>
      </li>
    </ul>

    {renderRoutes(route.routes)}
  </div>
);

const mapDispatchToProps = {
  setFirstRender
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.setFirstRender(false);
    }
  })
);

export default enhance(App);
