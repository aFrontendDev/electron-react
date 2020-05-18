/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Btn from './Btn';

Enzyme.configure({ adapter: new Adapter() });

describe('Btn element', () => {
  it('should render "button text"', () => {
    const comp = shallow(<Btn>button text</Btn>);
    expect(comp.text()).toBe('button text');
  });

  it('should render a span tag', () => {
    const comp = shallow(
      <Btn>
        <span>button text</span>
      </Btn>
    );
    expect(comp.find('span')).toHaveLength(1);
  });

  it('should not render class btn--primary', () => {
    const comp = shallow(<Btn />);
    expect(comp.hasClass('btn--primary')).toBe(false);
  });

  it('should render class btn--primary', () => {
    const comp = shallow(<Btn primary />);
    expect(comp.hasClass('btn--primary')).toBe(true);
  });

  it('should render class btn--secondary', () => {
    const comp = shallow(<Btn secondary />);
    expect(comp.hasClass('btn--secondary')).toBe(true);
  });

  it('should fire the passed function on click', () => {
    const clickCallback = spy();
    const comp = shallow(<Btn clickHandler={clickCallback} />);
    comp.simulate('click');
    expect(clickCallback.called).toBe(true);
  });

  it('should render extra props', () => {
    const comp = shallow(<Btn data-testing="here" />);
    expect(comp.prop('data-testing')).toBe('here');
  });
});
