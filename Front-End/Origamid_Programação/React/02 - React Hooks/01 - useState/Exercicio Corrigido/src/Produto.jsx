import React from 'react';

const Produto = ({ data }) => {
  return (
    <>
      <h1>{data.nome}</h1>
      <p>{data.preco}</p>
      <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
    </>
  );
};

export default Produto;
