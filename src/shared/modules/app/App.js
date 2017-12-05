import React from 'react';
import dirtyConnect from '../../hocs/dirtyConnect';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import setDisplayName from 'recompose/setDisplayName';
import setDefaultLocale from '../../hocs/setDefaultLocale';

import { TransitionGroup } from 'react-transition-group';
import FadeTransition from '../../components/FadeTransition';
import renderRoutes from '../../helpers/renderRoutes';
import Title from './Title';
import Nav from './Nav';
import LanguageSelect from './LanguageSelect';

import { initialize } from './actions';
import { addLocaleData } from 'react-intl';
import vi from 'react-intl/locale-data/vi';
import styles from './app.scss';

addLocaleData(vi);

const App = ({ route, location }) => {
  const currentKey = location.pathname.split('/')[1];

  return (
    <div>
      <header>
        <Title />
        <Nav />
        <LanguageSelect />
      </header>

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
  initialize
};

const enhance = compose(
  setDisplayName('App'),
  setDefaultLocale('en'),
  dirtyConnect(null, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.initialize();
    }
  })
);

export default enhance(App);
