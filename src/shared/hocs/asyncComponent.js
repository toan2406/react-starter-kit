import React from 'react';

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;

    static load() {
      return getComponent()
        .then(module => (module.default ? module.default : module))
        .then(Component => {
          AsyncComponent.Component = Component;
          return Component;
        });
    }

    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        AsyncComponent.load().then(Component => {
          this.setState({ Component });
        });
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}
