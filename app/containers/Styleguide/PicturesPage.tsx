import React from 'react';
import { Link } from 'react-router-dom';
import { jsonObjectType } from 'types/generics.type';
import routes from 'constants/routes.json';
import electronImg from 'assets/images/electron.png';
import Picture from 'elements/picture/Picture';
import LayoutA from '../LayoutA';
import styles from './Styleguide.scss';

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
          largeImg={electronImg}
          altText="electron logo"
          imgLoaded={() => console.log('loaded 1')}
        />
      </figure>

      <figure className={`block block--quarter ${styles['img-fig']}`}>
        <Picture
          largeImg="https://placeimg.com/640/480/people"
          smallImg="https://placeimg.com/320/250/tech"
          altText="random img"
          imgLoaded={() => console.log('loaded 2')}
        />
      </figure>
    </LayoutA>
  );
};

export default PicturePage;
