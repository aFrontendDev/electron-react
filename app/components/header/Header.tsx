import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { OpenMenu, CloseMenu } from 'actions/menu';
import { AllState } from 'types/_all.type';
import routes from 'constants/routes.json';
import styles from './Header.scss';

const Header = () => {
  const menuOpen = useSelector((state: AllState) => state?.menu?.menuOpen);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    if (menuOpen) {
      dispatch(CloseMenu());
    } else {
      dispatch(OpenMenu());
    }
  };

  return (
    <header className={styles.header} data-tid="header">
      <button
        data-test-id="menu-btn"
        type="button"
        className={styles.icon}
        onClick={handleMenuClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 24 24"
        >
          <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" />
          <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
        </svg>
      </button>

      <h2 className={styles.title}>
        <Link to={routes.HOME}>Electron React Boilerplate</Link>
      </h2>
    </header>
  );
};

export default Header;
