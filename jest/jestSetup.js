expect.extend({
  toBePromise(received, actual) {
    const pass = received instanceof Promise;
    const message = () =>
      `expected ${received} ${this.isNot ? 'not' : ''} to be a promise`;
    return { message, pass };
  }
});
