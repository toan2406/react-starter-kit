import asyncComponent from '../shared/hocs/asyncComponent';

export const Home = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/pages/Home'),
    'Home'
  )
);

export const RepoDetails = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/pages/RepoDetails'),
    'RepoDetails'
  )
);

export const Login = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/pages/Login'),
    'Login'
  )
);

export const About = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/pages/About'),
    'About'
  )
);
