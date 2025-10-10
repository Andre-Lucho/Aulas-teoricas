import React from 'react';
import Titulo from './Title';

const Produto = ({ data }) => {
  // const
  let { id, nome, preco, fotos } = data;
  return (
    <>
      <Titulo tagName={nome} />
      <ul>
        <li>R$ {preco}</li>
        {fotos.map((foto) => (
          <li key={Date.now()}>
            <img src={foto.src} alt={foto.titulo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Produto;
