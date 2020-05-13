/* eslint react/jsx-props-no-spreading: off */
import { spy } from 'sinon';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const mockStore = configureStore();
  const initialState = { menu: { menuOpen: false } };
  const store = mockStore(initialState);
  const actions = {
    dispatchOpenMenu: spy(),
    dispatchCloseMenu: spy()
  };
  const provider = (
    <Provider store={store}>
      <Router>
        <Header {...actions} />
      </Router>
    </Provider>
  );
  const app = mount(provider);
  return {
    app,
    actions,
    menubutton: app.find('[data-test-id="menu-btn"]')
  };
}

describe('Header', () => {
  it('should render menu btn', () => {
    const { menubutton } = setup();
    expect(menubutton).toHaveLength(1);
  });
});
