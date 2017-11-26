import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import FadeTransition from '../../components/FadeTransition';
import renderRoutes from '../../helpers/renderRoutes';
import { setFirstRender } from './actions';

import styles from './app.scss';
import logo from './logo.svg';

const App = ({ route, location }) => {
  const currentKey = location.pathname.split('/')[1];

  return (
    <div>
      <h1 className={styles.header}>
        <img src={logo} height="30" /> Welcome to React!
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <TransitionGroup className={styles.contentWrapper}>
        <FadeTransition key={currentKey}>
          <main className={styles.content}>
            {renderRoutes(route.routes, location)}
          </main>
        </FadeTransition>
      </TransitionGroup>
    </div>
  );
};

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
