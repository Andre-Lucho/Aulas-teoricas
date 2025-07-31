import React from 'react';

const Aula = () => {
  function meuNome() {
    return 'André Lucho';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  const estilo = {
    color: 'red',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p style={estilo}>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p style={{ fontSize: '35px' }}>
        {quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}
      </p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()} em mms de algum inicio</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};

export default Aula;
