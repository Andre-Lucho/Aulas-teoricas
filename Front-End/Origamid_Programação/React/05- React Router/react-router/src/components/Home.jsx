import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head/Head';

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Essa é a Home" />
      <h1>Home</h1>
      <p>Essa é a Página Home</p>
      <Link to={'produto/notebook'}>Notebook</Link>
      <br></br>
      <Link to={'produto/smatphone'}>Smartphone</Link>
    </div>
  );
};

export default Home;
