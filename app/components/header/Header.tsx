import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { OpenMenu, CloseMenu } from 'actions/menu';
import { AllState } from 'types/_all.type';
import routes from 'constants/routes.json';
import styles from './Header.scss';

type Props = {
  dispatchOpenMenu: () => void;
  dispatchCloseMenu: () => void;
  menuOpen: boolean;
};

const Header = (props: Props) => {
  const { dispatchOpenMenu, dispatchCloseMenu, menuOpen } = props;

  const handleMenuClick = () => {
    if (menuOpen) {
      dispatchCloseMenu();
    } else {
      dispatchOpenMenu();
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

const mapStateToProps = (state: AllState) => {
  return {
    menuOpen: state?.menu?.menuOpen
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      dispatchOpenMenu: OpenMenu,
      dispatchCloseMenu: CloseMenu
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
