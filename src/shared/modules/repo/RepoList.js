// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import { push } from 'react-router-redux';
import { searchRepos } from './actions';
import { getRepos, getSearchKeyword } from './selectors';

type Repo = {
  id: string,
  name: string,
  owner: { login: string }
};
type Props = {|
  repos: Array<Repo>,
  onItemClick: ({ owner: string, repo: string }) => mixed
|};

const RepoList = ({ repos, onItemClick }: Props) => (
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
  keyword: getSearchKeyword(state)
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
      const { searchRepos, keyword } = this.props;
      searchRepos({ keyword });
    }
  })
);

export default enhance(RepoList);
