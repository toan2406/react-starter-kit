// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import handleError from '../../hocs/handleError';
import { push } from 'react-router-redux';
import { searchRepos } from './actions';
import { getRepos, getSearchKeyword } from './selectors';

type Repo = {
  id: string,
  name: string,
  owner: { login: string },
  stargazers_count: number
};
type Props = {|
  repos: Array<Repo>,
  onItemClick: ({ owner: string, repo: string }) => mixed
|};

const RepoList = ({ repos, onItemClick }: Props) => (
  <ul>
    {repos.map(({ id, name, owner, stargazers_count }) => (
      <li
        key={id}
        onClick={onItemClick.bind(null, {
          owner: owner.login,
          repo: name
        })}
      >
        {name} ⭐ {stargazers_count}
      </li>
    ))}
  </ul>
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
  handleError(),
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
