// @flow
export default function isPromise(val: Object): boolean {
  return val && typeof val.then === 'function';
}
