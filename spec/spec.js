import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';
import App from '../client/src/components/App.jsx';


//let wrapper = mount(<App />);
  test('App is an instance of App', () => {
    shallow(<App />)
    // expect(wrapper.find('.greeting')).toHaveClassName('greeting');
  });

