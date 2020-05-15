import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Picture from '../../elements/picture/Picture';
import electronImg from '../../assets/images/electron.png';

const Home = () => {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <div className={styles['img-container']}>
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
    </div>
  );
};

export default Home;
