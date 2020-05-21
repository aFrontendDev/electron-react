import React, { ReactNode, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CloseMenu } from 'actions/menu';
import { AllState } from 'types/_all.type';
import Header from 'components/header/Header';
import SlideOutMenu from 'components/slideOutMenu/SlideOutMenu';
import LayoutOverlay from 'components/layoutOverlay/LayoutOverlay';

type Props = {
  children: ReactNode;
  location: RouteComponentProps;
};

const App = (props: Props) => {
  const { children, location } = props;
  const [storedLocation, setStoredLocation] = useState(location);
  const menuOpen = useSelector((state: AllState) => state?.menu?.menuOpen);
  const dispatch = useDispatch();

  const closeMenu = () => {
    if (menuOpen) {
      dispatch(CloseMenu());
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

export default withRouter(App);
