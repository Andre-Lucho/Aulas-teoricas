import React, { useEffect, useState } from 'react';
import App from '../App';
import Titulo from './Title';

const Produto = ({ produto }) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (produto) {
      setData(null); //*

      const handleData = async () => {
        setLoad(false);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
        );
        const dados = await response.json();
        setData(dados);
        setLoad(true);
      };
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
