import { Map } from './simpleImmutable';

describe('simpleImmutable', () => {
  const state = {
    posts: ['foo', 'bar', 'baz'],
    selectedPost: 'foo'
  };

  it('should have a get method', () => {
    const mapFunctor = Map(state).set('selectedPost', 'baz');
    expect(typeof mapFunctor).toEqual('object');
    expect(mapFunctor.get).toBeDefined();
  });

  it('should not mutate original object', () => {
    const nextState = Map(state)
      .set({
        selectedPost: 'bar'
      })
      .get();
    expect(nextState.selectedPost).toEqual('bar');
    expect(state).not.toBe(nextState);
    expect(state.posts).toBe(nextState.posts);
  });

  it('should support key-value setter', () => {
    const nextState = Map(state)
      .set('posts', [])
      .get();
    expect(state.posts).toEqual(['foo', 'bar', 'baz']);
    expect(nextState.posts).toEqual([]);
  });

  it('should ignore unhandled exception', () => {
    const nextState = Map(state)
      .set()
      .set(null)
      .get();
    expect(state).toBe(nextState);
  });
});
