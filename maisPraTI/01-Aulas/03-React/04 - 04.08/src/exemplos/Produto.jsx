import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <>
      <div className="div-produtos">
        <h2>{nome}</h2>
        <ul>
          {propriedades.map((prop) => (
            <li key={prop}>{prop}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Produto;
