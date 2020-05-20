import React from 'react';
import LayoutA from '../LayoutA';
import styles from './LayoutPage.scss';

const LayoutPage = () => {
  return (
    <LayoutA>
      <h2 className={styles.title}>Layout A</h2>
      <div className={`block block--full ${styles['example-block']}`}>
        Full width (<small>.block .block--full</small>)
      </div>

      <div className={`block block--half ${styles['example-block']}`}>
        Full width (<small>.block .block--half</small>)
      </div>
      <div className={`block block--half ${styles['example-block']}`}>
        Full width (<small>.block .block--half</small>)
      </div>

      <div className={`block block--quarter ${styles['example-block']}`}>
        Full width (<small>.block .block--quarter</small>)
      </div>
      <div className={`block block--quarter ${styles['example-block']}`}>
        Full width (<small>.block .block--quarter</small>)
      </div>
      <div className={`block block--quarter ${styles['example-block']}`}>
        Full width (<small>.block .block--quarter</small>)
      </div>
      <div className={`block block--quarter ${styles['example-block']}`}>
        Full width (<small>.block .block--quarter</small>)
      </div>
    </LayoutA>
  );
};

export default LayoutPage;
