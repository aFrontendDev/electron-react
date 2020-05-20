import React, { useState } from 'react';
import LayoutA from 'containers/LayoutA';
import styles from './LayoutOverlay.scss';

const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const LayoutOverlay = () => {
  const [gridIn, setGridIn] = useState(false);

  const handleClick = () => {
    setGridIn(!gridIn);
  };

  const gridText = gridIn ? 'hide grid' : 'show grid';
  const gridInClass = gridIn ? styles['container--in'] : '';

  return (
    <>
      <button type="button" className={styles.switch} onClick={handleClick}>
        {gridText}
      </button>
      <div className={`${styles.container} ${gridInClass}`}>
        {gridIn && (
          <LayoutA>
            {blocks.map(x => (
              <div
                className={`block block--single ${styles.col}`}
                key={`layout-overlay-block-${x}`}
              />
            ))}
          </LayoutA>
        )}
      </div>
    </>
  );
};

export default LayoutOverlay;
