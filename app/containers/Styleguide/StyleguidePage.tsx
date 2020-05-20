import React from 'react';
import { Link } from 'react-router-dom';
import { jsonObjectType } from 'types/generics.type';
import LayoutA from '../LayoutA';
import styles from './Styleguide.scss';

const routes = {
  Buttons: 'styleguide/buttons',
  Picture: 'styleguide/picture',
  Icons: 'styleguide/icons'
};

const StyleguidePage = () => {
  const routesObject: jsonObjectType = routes;
  const routesArr = Object.keys(routesObject);

  return (
    <LayoutA>
      <div className="block block--full">
        <h2 className={styles.title}>Styleguide</h2>

        {routesArr.map((route: string) => {
          const routeName = routesObject[route];

          return (
            <ul key={route}>
              <li>
                <Link key={route} to={routeName}>
                  {route}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </LayoutA>
  );
};

export default StyleguidePage;
