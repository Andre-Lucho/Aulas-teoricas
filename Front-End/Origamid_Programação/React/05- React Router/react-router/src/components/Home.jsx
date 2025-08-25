import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a Página Home</p>
      <Link to={'produto/notebook'}>Notebook</Link>
      <br></br>
      <Link to={'produto/smatphone'}>Smartphone</Link>
    </div>
  );
};

export default Home;
