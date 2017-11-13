import App from '../src/modules/app/App';
import NotFound from '../src/components/NotFound';
import RepoList from '../src/modules/repo/RepoList';
import RepoDetails from '../src/modules/repo/RepoDetails';

const routes = [
  {
    component: App,
    routes: [
      {
        component: RepoList,
        path: '/',
        exact: true
      },
      {
        component: RepoDetails,
        path: '/repos'
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
