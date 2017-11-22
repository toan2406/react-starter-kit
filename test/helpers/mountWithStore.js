import { mount } from 'enzyme';

export default function mountWithStore(Component, store) {
  const context = { store };
  return mount(Component, { context });
}
