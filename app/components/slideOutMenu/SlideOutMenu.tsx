import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CloseMenu } from 'actions/menu';
import { AllState } from 'types/_all.type';
import { jsonObjectType } from 'types/generics.type';
import routes from 'constants/routes.json';
import styles from './SlideOutMenu.scss';

const SlideOutMenu = () => {
  const menuOpen = useSelector((state: AllState) => state?.menu?.menuOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(CloseMenu());
  };

  const menuInClass = menuOpen ? styles['container--open'] : '';
  const routesObject: jsonObjectType = routes;
  const routesArr = Object.keys(routesObject);

  return (
    <div className={`${styles.container} ${menuInClass}`}>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={handleClick}
          className={styles['close-btn']}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M12 11.293L22.293 1l.707.707L12.707 12 23 22.293l-.707.707L12 12.707 1.707 23 1 22.293 11.293 12 1 1.707 1.707 1 12 11.293z" />
          </svg>
        </button>
      </div>
      <nav className={styles.nav}>
        {routesArr.map((route: string) => {
          const routeName = routesObject[route];
          return (
            <Link key={route} to={routeName}>
              {route}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SlideOutMenu;
