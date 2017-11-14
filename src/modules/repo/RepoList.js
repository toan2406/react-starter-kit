import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import { push } from 'react-router-redux';
import { searchRepos } from './actions';
import { getRepos } from './selectors';
import { getFirstRender } from '../app/selectors';

const RepoList = ({ repos, onItemClick }) => (
  <div>
    <h2>Top 10 Repos</h2>
    <ul>
      {repos.map(({ id, name, owner }) => (
        <li
          key={id}
          onClick={onItemClick.bind(null, {
            owner: owner.login,
            repo: name
          })}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  repos: getRepos(state),
  firstRender: getFirstRender(state)
});

const mapDispatchToProps = {
  searchRepos,
  push
};

const enhance = compose(
  setDisplayName('RepoList'),
  setStatic('needs', [searchRepos]),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onItemClick: props => ({ owner, repo }) => props.push(`/${owner}/${repo}`)
  }),
  lifecycle({
    componentDidMount() {
      const { firstRender, searchRepos } = this.props;
      if (!firstRender) {
        searchRepos({});
      }
    }
  })
);

export default enhance(RepoList);
