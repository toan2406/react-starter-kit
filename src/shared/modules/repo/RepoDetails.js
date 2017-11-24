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
import { getFirstRender } from '../app/selectors';
import Common from '../../components/Common';

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
      <Common />
      <p>Star: {selectedRepo.stargazers_count}</p>
    </div>
  );

const mapStateToProps = (state, ownProps) => ({
  selectedRepo: getSelectedRepo(state),
  firstRender: getFirstRender(state)
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
      const { firstRender, getRepo, match } = this.props;
      if (!firstRender) {
        getRepo(match.params);
      }
    }
  }),
  branch(props => !props.selectedRepo, renderNothing)
);

export default enhance(RepoDetails);
