import React, { useEffect, useState } from 'react';
import App from '../App';
import Titulo from './Title';
import axios from 'axios';

const Produto = ({ produto }) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  const apiClient = axios.create({
    baseURL: 'https://ranekapi.origamid.dev/json/api/produto/',
  });

  useEffect(() => {
    if (produto) {
      setData(null); //*

      async function handleData() {
        setLoad(false);

        try {
          const response = await apiClient.get(produto);
          setData(response.data);
        } catch (error) {
          console.error('Erro: ', error);
        } finally {
          setLoad(true);
        }
      }
      handleData(produto);
    }
  }, [produto]);

  if (!data) return null; //*

  /* 
  * garantir que data sempre inicie = null(resetado):
  Evita que, mesmo clicando em um mesmo produto já armazenado no localStorage (capturar o mesmo innerText do armazenado no localStorage), o componente re-renderize o mesmo conjunto de imagens 2x.
  Assim, data receberá sempre dados novos do fetch e o componente entenderá que deve limpar a tela 
  */

  let { id, nome, preco, fotos } = data;

  return (
    <>
      {!load && <p>Carregando...</p>}
      <Titulo tagName={nome} />
      <ul>
        <li>R$ {preco}</li>
        {fotos.map((foto, i) => (
          <li key={i}>
            <img src={foto.src} alt={foto.titulo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Produto;
