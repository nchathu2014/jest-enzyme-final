import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

test('renders reset button', () => {
  const wrapper = setup();
  const resetButton = findTestAttr(wrapper, "reset-button");
  expect(resetButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments the counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const incrementButton = findTestAttr(wrapper, "increment-button");
  incrementButton.simulate('click');
  wrapper.update();

  //find display and test
  const counterDisplay = findTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('click button reset the counter 0',()=>{
  const counter = 0;
  const wrapper = setup(null, { counter });
  const resetButton = findTestAttr(wrapper, "reset-button");
  resetButton.simulate('click');

  const counterDisplay = findTestAttr(wrapper, "counter-display");
  console.log(counterDisplay.text())
  expect(counterDisplay.text()).toContain(counter);

});

test('increment button text validation',()=>{
  const wrapper = setup();
  const incrementButton = findTestAttr(wrapper, "increment-button");
  expect(incrementButton.text()).toContain("Increment counter");
});

test('reset button text validation',()=>{
  const wrapper = setup();
  const resetButton = findTestAttr(wrapper, "reset-button");
  expect(resetButton.text()).toContain("Reset");
});
