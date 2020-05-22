import React from 'react';
import { Link } from 'react-router-dom';
import { jsonObjectType } from 'types/generics.type';
import routes from 'constants/routes.json';
import Picture from 'elements/picture/Picture';
import electronImg from 'assets/images/electron.png';
import LayoutA from '../LayoutA';
import styles from './Styleguide.scss';

const electronImgObj = require('assets/images/electron.png');

const PicturePage = () => {
  const routesObj: jsonObjectType = routes;

  return (
    <LayoutA>
      <div className="block block--full">
        <h2 className={styles.title}>Styleguide</h2>
        <Link to={routesObj.STYLEGUIDE}>Back to styleguide</Link>
      </div>

      <figure className={`block block--quarter ${styles['img-fig']}`}>
        <Picture
          largeImg={electronImgObj.default}
          altText="electron logo"
          imgLoaded={() => console.log('loaded 1')}
        />
        <figcaption>Image loaded via 'require'</figcaption>
      </figure>

      <figure className={`block block--quarter ${styles['img-fig']}`}>
        <Picture
          smallImg={electronImg}
          altText="electron logo"
          imgLoaded={() => console.log('loaded 2')}
        />
        <figcaption>Image loaded via 'import'</figcaption>
      </figure>

      <figure className={`block block--quarter ${styles['img-fig']}`}>
        <Picture
          largeImg="https://placeimg.com/640/480/people"
          smallImg="https://placeimg.com/320/250/tech"
          altText="random img"
          imgLoaded={() => console.log('loaded 3')}
        />
        <figcaption>Image loaded via url</figcaption>
      </figure>
    </LayoutA>
  );
};

export default PicturePage;
