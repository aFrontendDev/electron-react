/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from 'store/configureStore';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const initialState = { menu: { menuOpen: false } };
  const store = configureStore(initialState);
  const provider = (
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  const app = mount(provider);
  return {
    app,
    menubutton: app.find('[data-test-id="menu-btn"]')
  };
}

describe('Header', () => {
  it('should render menu btn', () => {
    const { menubutton } = setup();
    expect(menubutton).toHaveLength(1);
  });
});
