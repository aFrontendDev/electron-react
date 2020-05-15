/* eslint react/jsx-props-no-spreading: off */
import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Counter from './Counter';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    IncrementAction: spy(),
    IncrementIfOdd: spy(),
    IncrementAsyncAction: spy(),
    DecrementAction: spy()
  };
  const component = shallow(<Counter count={1} {...actions} />);
  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('.counter')
  };
}

describe('Counter component', () => {
  it('should should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^1$/);
  });

  it('should first button should call increment', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.IncrementAction.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { actions } = setup();
    const counter = (
      <div>
        <Router>
          <Counter count={1} {...actions} />
        </Router>
      </div>
    );
    const tree = renderer.create(counter).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should second button should call decrement', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.DecrementAction.called).toBe(true);
  });

  it('should third button should call IncrementIfOdd', () => {
    const { buttons, actions } = setup();
    buttons.at(2).simulate('click');
    expect(actions.IncrementIfOdd.called).toBe(true);
  });

  it('should fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    buttons.at(3).simulate('click');
    expect(actions.IncrementAsyncAction.called).toBe(true);
  });
});
