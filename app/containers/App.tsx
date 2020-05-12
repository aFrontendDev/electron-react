import React, { ReactNode } from 'react';
import Header from '../components/header/Header';
import SlideOutMenu from '../components/slideOutMenu/SlideOutMenu';

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      <SlideOutMenu />
      {children}
    </>
  );
}
