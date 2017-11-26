// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { enterSearchKeyword } from './actions';
import { getSearchKeyword } from './selectors';

const SearchInput = ({ value, onChange }) => (
  <form>
    <input type="text" value={value} onChange={onChange} />
  </form>
);

const mapStateToProps = (state, ownProps) => ({
  value: getSearchKeyword(state)
});

const mapDispatchToProps = {
  enterSearchKeyword
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => props.enterSearchKeyword(event.target.value)
  })
);

export default enhance(SearchInput);
