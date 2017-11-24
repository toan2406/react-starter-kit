// @flow
class _Functor {
  value: Object;

  constructor(value: Object) {
    this.value = value;
  }

  get(): Object {
    return this.value;
  }
}

class _Map extends _Functor {
  set(...args: [Object, void] | [string, mixed]): _Map {
    if (typeof args[0] === 'object' && args[0] !== null) {
      const newValue = {
        ...this.value,
        ...args[0]
      };
      return new _Map(newValue);
    }

    if (typeof args[0] === 'string' && args.length >= 2) {
      const newValue = {
        ...this.value,
        [args[0]]: args[1]
      };
      return new _Map(newValue);
    }

    return this;
  }
}

export function Map(value: Object): _Map {
  return new _Map(value);
}
