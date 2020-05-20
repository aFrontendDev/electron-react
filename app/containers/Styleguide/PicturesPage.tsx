import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'constants/routes.json';
import electronImg from 'assets/images/electron.png';
import Picture from 'elements/picture/Picture';
import LayoutA from '../LayoutA';
import styles from './Styleguide.scss';

const PicturePage = () => {
  return (
    <LayoutA>
      <div className="block block--full">
        <h2 className={styles.title}>Styleguide</h2>
        <Link to={routes.STYLEGUIDE}>Back to styleguide</Link>
      </div>

      <div className="block block--full">
        <figure className={styles['img-fig']}>
          <Picture
            largeImg={electronImg}
            altText="electron logo"
            imgLoaded={() => console.log('loaded 1')}
          />
        </figure>

        <figure className={styles['img-fig']}>
          <Picture
            largeImg="https://placeimg.com/640/480/people"
            smallImg="https://placeimg.com/320/250/tech"
            altText="random img"
            imgLoaded={() => console.log('loaded 2')}
          />
        </figure>
      </div>
    </LayoutA>
  );
};

export default PicturePage;
