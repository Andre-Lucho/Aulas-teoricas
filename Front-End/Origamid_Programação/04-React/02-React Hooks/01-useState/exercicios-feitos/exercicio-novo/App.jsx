import React, { useState } from 'react';
import Button from './components/Button';
import Titulo from './components/Titulo';
import Produto from './components/Produto';

const App = () => {
  const [dataProd, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  async function handleClick(event) {
    setLoad(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const Prod = await response.json();
    setData(Prod);
    setLoad(false);
  }

  return (
    <>
      <Button className="button" tagName="Notebook" onClick={handleClick} />
      <Button className="button" tagName="Smartphone" onClick={handleClick} />
      <Button className="button" tagName="Tablet" onClick={handleClick} />
      {load && <p>Carregando...</p>}
      {!load && dataProd && <Produto data={dataProd} />}
    </>
  );
};

export default App;
