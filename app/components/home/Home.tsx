import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Picture from '../../elements/picture/Picture';
import electronImg from '../../assets/images/electron.png';
import Btn from '../../elements/btn/Btn';
import { ReactComponent as IconParty } from '../../assets/icons/party.svg';
import { getReq } from '../../helpers/fetch.helper';

const Home = () => {
  const [randomData, setRandomData] = useState(null);

  const getData = async () => {
    const data = await getReq({ url: 'https://reqres.in/api/users?page=2' });
    if (data.status === 200) {
      setRandomData(data.content);
    }
  };

  useEffect(() => {
    // did mount
    console.log('mount - randomData', randomData);
    getData();
  }, []);

  useEffect(() => {
    // update
    console.log('update - randomData', randomData);
  }, [randomData]);

  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>

      <div className={styles.icon}>
        <IconParty />
      </div>

      <h3>Button examples</h3>
      <div>
        <Btn>this is a basic button</Btn>
      </div>
      <div>
        <Btn primary clickHandler={() => console.log('click')}>
          this is a primary button
        </Btn>
      </div>
      <div>
        <Btn secondary data-test="spread extra props">
          this is a secondary button
        </Btn>
      </div>
      <div>
        <Btn disabled clickHandler={() => console.log('disabled click')}>
          this is a disabled button
        </Btn>
      </div>

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
