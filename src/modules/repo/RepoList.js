import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { searchRepos } from './actions';
import { getRepos } from './selectors';

const RepoList = ({ repos }) => (
  <div>
    <h2>Top 10 Repos</h2>
    <ul>{repos.map(({ id, name, owner }) => <li key={id}>{name}</li>)}</ul>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  repos: getRepos(state)
});

const mapDispatchToProps = {
  searchRepos
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { searchRepos } = this.props;
      searchRepos({});
    }
  })
);

export default enhance(RepoList);
