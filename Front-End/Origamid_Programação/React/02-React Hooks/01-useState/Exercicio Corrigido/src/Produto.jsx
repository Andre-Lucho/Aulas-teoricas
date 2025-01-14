import React from 'react';

const Produto = ({ data }) => {
  const { nome, preco, fotos } = data;
  return (
    <>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </>
  );
};

export default Produto;
