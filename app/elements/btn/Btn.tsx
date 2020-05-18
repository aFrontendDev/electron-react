/* eslint-disable react/button-has-type */ /* there's a default type of button but the linter doesn't see this */
import React, { ReactNode } from 'react';

type Props = {
  clickHandler?: () => void;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
};

const Btn = (props: Props) => {
  const {
    primary,
    secondary,
    disabled,
    type = 'button',
    clickHandler,
    children
  } = props;

  const btnMarkup = (style?: string) => (
    <button
      type={type}
      disabled={disabled}
      onClick={clickHandler}
      className={`btn ${style}`}
      {...props}
    >
      {children}
    </button>
  );

  switch (true) {
    case primary:
      return btnMarkup('btn--primary');

    case secondary:
      return btnMarkup('btn--secondary');

    default:
      return btnMarkup();
  }
};

export default Btn;
