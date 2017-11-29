import { connect } from 'react-redux';

export default function dirtyConnect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options
) {
  return connect(mapStateToProps, mapDispatchToProps, mergeProps, {
    ...options,
    pure: false
  });
}
