import lifecycle from 'recompose/lifecycle';

export default function doOnReceiveProps(callback) {
  return lifecycle({
    componentWillMount() {
      callback(this.props);
    },

    componentWillReceiveProps(nextProps) {
      callback(nextProps);
    }
  });
}
