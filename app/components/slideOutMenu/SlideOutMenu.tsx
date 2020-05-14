import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CloseMenu } from '../../actions/menu';
import { AllState } from '../../types/_all';
import routes from '../../constants/routes.json';
import styles from './SlideOutMenu.scss';

type Props = {
  dispatchCloseMenu: () => void;
  menuOpen: boolean;
};

const SlideOutMenu = (props: Props) => {
  const { dispatchCloseMenu, menuOpen } = props;

  const handleClick = () => {
    dispatchCloseMenu();
  };

  const menuInClass = menuOpen ? styles['container--open'] : '';

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
        <Link to={routes.HOME}>Home</Link>
        <Link to={routes.COUNTER}>Counter</Link>
      </nav>
    </div>
  );
};

const mapStateToProps = (state: AllState) => {
  return {
    menuOpen: state.menu.menuOpen
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ dispatchCloseMenu: CloseMenu }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideOutMenu);
