import React from 'react';
import Titulo from './Titulo';
import FetchProduto from './FetchProduto';

const Produto = ({ data }) => {
  let { id, nome, preco, fotos } = data;
  return (
    <>
      <Titulo tagName={nome} />
      <ul>
        <li>R$ {preco}</li>
        {fotos.map((foto) => (
          <li key={id}>
            <img src={foto.src} alt={foto.titulo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Produto;
