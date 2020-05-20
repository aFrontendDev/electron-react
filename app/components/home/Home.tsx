import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReq } from 'helpers/fetch.helper';
import routes from 'constants/routes.json';
import Btn from 'elements/btn/Btn';
import Picture from 'elements/picture/Picture';
import electronImg from 'assets/images/electron.png';
import IconParty from 'elements/icons/IconParty';
import styles from './Home.scss';

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
    <div className="block block--full">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
};

export default Home;
