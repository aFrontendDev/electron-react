import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'constants/routes.json';
import Btn from 'elements/btn/Btn';
import LayoutA from '../LayoutA';
import styles from './Styleguide.scss';

const StyleguidePage = () => {
  return (
    <LayoutA>
      <div className="block block--full">
        <h2 className={styles.title}>Styleguide</h2>
        <Link to={routes.STYLEGUIDE}>Back to styleguide</Link>
      </div>

      <div className="block block--full">
        <Btn>this is a basic button</Btn>
      </div>

      <div className="block block--full">
        <Btn primary clickHandler={() => console.log('click')}>
          this is a primary button
        </Btn>
      </div>

      <div className="block block--full">
        <Btn secondary data-test="spread extra props">
          this is a secondary button
        </Btn>
      </div>

      <div className="block block--full">
        <Btn disabled clickHandler={() => console.log('disabled click')}>
          this is a disabled button
        </Btn>
      </div>
    </LayoutA>
  );
};

export default StyleguidePage;
