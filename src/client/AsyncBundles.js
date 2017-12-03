import asyncComponent from '../shared/hocs/asyncComponent';

export const Home = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/home/Home'),
    'Home'
  )
);

export const RepoDetails = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/repo/RepoDetails'),
    'RepoDetails'
  )
);

export const About = asyncComponent(() =>
  require.ensure(
    [],
    require => require('../shared/modules/about/About'),
    'About'
  )
);
