import React from 'react';
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

import Counter from '../components/counter/counter.js';

//deploy
describe('<Counter />', () => {
  it('is alive at start', () => {
    let component =  shallow(<Counter />);
    expect(component.find('span').exists()).toBeTruthy();
  });
  it('decrement state on click', () => {
    let component = mount(<Counter />);
    let decrementButton = component.find('.down-clicker');
    decrementButton.simulate('click');
    expect(component.state('count')).toEqual(-1);
  })

  it('increments state on click', () => {
    let component = mount(<Counter />);
    let incrementButton = component.find('.up-clicker');
    incrementButton.simulate('click');
    expect(component.state('count')).toEqual(1);
  })

  it('displays correct number', () => {
    let component = mount(<Counter />);
    let displayElement = component.find('span');
    expect(displayElement.text()).toContain('0')
  })

  it('displays correct number', () => {
    let component = mount(<Counter />);
    let incrementButton = component.find('.up-clicker');
    incrementButton.simulate('click');
    let displayElement = component.find('span');
    expect(displayElement.text()).toContain('1')
  })

  it('displays correct number', () => {
    let component = mount(<Counter />);
    let decrementButton = component.find('.up-clicker');
    decrementButton.simulate('click');
    let displayElement = component.find('span');
    expect(displayElement.text()).toContain('1')
  })

  it('renders corrently', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
