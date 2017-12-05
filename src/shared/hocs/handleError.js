import React from 'react';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

const DefaultErrorMessage = () => (
  <div className="error">
    <strong>Something went wrong</strong>
  </div>
);

export default function handleError(ErrorMessage = DefaultErrorMessage) {
  return compose(
    lifecycle({
      componentDidCatch(error, info) {
        this.setState({ error: true });
      }
    }),
    branch(props => props.error, renderComponent(ErrorMessage))
  );
}
