import React from 'react';
import { mount } from 'enzyme';

export default function mountWithStore(Component, store) {
  return mount(React.cloneElement(Component, { store }));
}
