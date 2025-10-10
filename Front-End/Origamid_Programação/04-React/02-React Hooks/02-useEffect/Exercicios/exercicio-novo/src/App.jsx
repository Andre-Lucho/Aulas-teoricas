import { useState, useEffect } from 'react';
import Titulo from './components/Title';
import Button from './components/Buttons';
import Produto from './components/Product';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  const apiClient = axios.create({
    baseURL: 'https://ranekapi.origamid.dev/json/api/produto/',
  });

  async function handleData({ target }) {
    setLoad(false);
    try {
      const response = await apiClient.get(target.innerText);
      setData(response.data);
    } catch (error) {
      console.error('Erro: ', error);
    } finally {
      setLoad(true);
    }
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
