import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const LayoutA = (props: Props) => {
  const { children } = props || {};

  return (
    <div className="layout layout--a">
      <div className="layout__inner">{children}</div>
    </div>
  );
};

export default LayoutA;
