import { useState, useEffect } from 'react';
import Titulo from './components/Title';
import Button from './components/Buttons';
import Produto from './components/Product';

const App = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  async function handleData(event) {
    setLoad(false);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );

    const dados = await response.json();
    setData(dados);
    setLoad(true);
  }

  // Notar que, sempre que o usuário da refresh, o fetch é realizado

  useEffect(() => {
    if (data) {
      localStorage.setItem('dadosUsuario', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const dadosStorage = JSON.parse(localStorage.getItem('dadosUsuario'));
    if (dadosStorage) setData(dadosStorage);
  }, []);

  return (
    <>
      <Titulo tagName="Preferências" />
      <Button tagName="Notebook" onClick={handleData} />
      <Button tagName="Smartphone" onClick={handleData} />
      {!load && <p>Carregando...</p>}
      {load && data && <Produto data={data} />}
    </>
  );
};

export default App;
