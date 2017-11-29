// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import setStatic from 'recompose/setStatic';
import setDisplayName from 'recompose/setDisplayName';
import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';
import { getRepo } from './actions';
import { getSelectedRepo } from './selectors';

type Repo = {
  name: string,
  stargazers_count: number
};
type Props = {|
  selectedRepo?: Repo
|};

const RepoDetails = ({ selectedRepo }: Props) =>
  !selectedRepo ? null : (
    <div>
      <h2>{selectedRepo.name}</h2>
      <p>Star: {selectedRepo.stargazers_count}</p>
    </div>
  );

const mapStateToProps = (state, ownProps) => ({
  selectedRepo: getSelectedRepo(state)
});

const mapDispatchToProps = {
  getRepo
};

const enhance = compose(
  setDisplayName('RepoDetails'),
  setStatic('needs', [getRepo]),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { getRepo, match } = this.props;
      getRepo(match.params);
    }
  }),
  branch(props => !props.selectedRepo, renderNothing)
);

export default enhance(RepoDetails);
