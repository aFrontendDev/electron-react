import React from 'react';
import { Link } from 'react-router-dom';
import { jsonObjectType } from 'types/generics.type';
import routes from 'constants/routes.json';
import IconParty from 'elements/icons/IconParty';
import LayoutA from '../LayoutA';
import styles from './Styleguide.scss';

const IconsPage = () => {
  const routesObj: jsonObjectType = routes;

  return (
    <LayoutA>
      <div className="block block--full">
        <h2 className={styles.title}>Styleguide</h2>
        <Link to={routesObj.STYLEGUIDE}>Back to styleguide</Link>
      </div>

      <div className="block block--full">
        <ul>
          <li>
            IconParty:
            <span className={styles.icon}>
              <IconParty />
            </span>
          </li>
        </ul>
      </div>
    </LayoutA>
  );
};

export default IconsPage;
