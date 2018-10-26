import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';
import App from '../client/src/components/App.jsx';


describe('App component', () => {
  test('should shallow correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  });
  test('should mount correctly', () => {
    expect(mount(<App />)).toMatchSnapshot()
  });
  test('should render correctly', () => {
    expect(render(<App />)).toMatchSnapshot()
  });
  test('should output text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('.greeting').text();
    expect(text).toEqual('Hi...my name is Lindsey')

  });
});

