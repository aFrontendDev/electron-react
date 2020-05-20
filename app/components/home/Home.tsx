import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jsonObjectType } from 'types/generics.type';
import { getReq } from 'helpers/fetch.helper';
import routes from 'constants/routes.json';

const Home = () => {
  const [randomData, setRandomData] = useState(null);
  const routesObj: jsonObjectType = routes;

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
      <br />

      <Link to={routesObj.COUNTER}>to Counter</Link>
      <br />
      <br />

      <Link to={routesObj.STYLEGUIDE}>to Styleguide</Link>
      <br />
      <br />

      <Link to={routesObj.LAYOUT}>to Layout</Link>
      <br />
      <br />
    </div>
  );
};

export default Home;
