class _Functor {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}

class _Map extends _Functor {
  set(...args) {
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

export function Map(value) {
  return new _Map(value);
}
