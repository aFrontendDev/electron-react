import React, { ReactNode, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CloseMenu } from 'actions/menu';
import { AllState } from 'types/_all.type';
import Header from 'components/header/Header';
import SlideOutMenu from 'components/slideOutMenu/SlideOutMenu';
import LayoutOverlay from 'components/layoutOverlay/LayoutOverlay';

type Props = {
  children: ReactNode;
  location: RouteComponentProps;
  dispatchCloseMenu: () => void;
  menuOpen: boolean;
};

const App = (props: Props) => {
  const { children, location, menuOpen, dispatchCloseMenu } = props;
  const [storedLocation, setStoredLocation] = useState(location);

  const closeMenu = () => {
    if (menuOpen) {
      dispatchCloseMenu();
    }
  };

  // did update
  useEffect(() => {
    if (location !== storedLocation) {
      setStoredLocation(location);
      closeMenu();
    }
  }, [location]);

  return (
    <>
      <Header />
      <SlideOutMenu />
      {children}
      <LayoutOverlay />
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
