import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LayoutPage from './containers/LayoutPage/LayoutPage';
import TestPage from './containers/TestPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} exact component={HomePage} />
        <Route path={routes.LAYOUT} component={LayoutPage} />
        <Route path={routes.TEST} component={TestPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </App>
  );
}
