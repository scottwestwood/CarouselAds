import React from 'react';
import App from './App';


test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug())
  expect(wrapper).toHaveLength(1)
});
