import React from 'react';
import compose from 'recompose/compose';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import RepoDetails from '../repo/RepoDetails';

const RepoDetailsPage = () => (
  <div>
    <RepoDetails />
  </div>
);

const enhance = compose(
  setDisplayName('RepoDetails'),
  setStatic('needs', RepoDetails.needs)
);

export default enhance(RepoDetailsPage);
