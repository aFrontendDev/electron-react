import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LayoutPage from './containers/LayoutPage/LayoutPage';
import TestPage from './containers/TestPage';
import Styleguide from './containers/Styleguide/StyleguidePage';
import ButtonsPage from './containers/Styleguide/ButtonsPage';
import PicturesPage from './containers/Styleguide/PicturesPage';
import IconsPage from './containers/Styleguide/IconsPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} exact component={HomePage} />
        <Route path={routes.LAYOUT} component={LayoutPage} />
        <Route path={routes.TEST} component={TestPage} />

        <Route path={routes.STYLEGUIDE} exact component={Styleguide} />
        <Route path={routes['STYLEGUIDE/BUTTONS']} component={ButtonsPage} />
        <Route path={routes['STYLEGUIDE/PICTURE']} component={PicturesPage} />
        <Route path={routes['STYLEGUIDE/ICONS']} component={IconsPage} />

        <Route path="*" component={HomePage} />
      </Switch>
    </App>
  );
}
