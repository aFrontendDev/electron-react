import React from 'react';
import LayoutA from '../LayoutA';
import styles from './LayoutPage.scss';

const LayoutPage = () => {
  return (
    <LayoutA>
      <h2>Layout A</h2>
      <div className={`block block--full ${styles['example-block']}`}>
        Full width (<small>.block .block--full</small>)
      </div>
    </LayoutA>
  );
};

export default LayoutPage;
