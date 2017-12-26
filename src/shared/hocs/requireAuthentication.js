import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import defaultProps from 'recompose/defaultProps';
import makeStaticComponent from './makeStaticComponent';

const RedirectLogin = makeStaticComponent(({ location }) => (
  <Redirect
    to={{
      pathname: '/login',
      state: { from: location }
    }}
  />
));

export default function requireAuthentication(BaseComponent) {
  return compose(
    connect(({ auth }) => ({ auth })),
    defaultProps({ auth: {} }),
    branch(
      props => props.auth.token,
      renderComponent(BaseComponent),
      renderComponent(RedirectLogin)
    )
  )(BaseComponent);
}
