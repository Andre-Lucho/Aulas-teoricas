import React from 'react';

/*
Exercício

Organize os produtos como mostrado no vídeo
Mostre apenas produtos que forem mais caros que R$ 1500 */

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App1 = () => {
  const novaLista = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', ' ')) >= 2000,
  );

  /* aqui, não estou limpando o objeto --> filter não modifica o objeto inicial..
    replace, aqui, está transformando o número apenas para LEITURA E COMPARAÇÃO com o 2000 e devolvendo o objeto inalterado...
    após isso, o filter seleciona as posições e retorna parte do objeto já filtrado, após essa comparação */

  return (
    <>
      <section>
        {novaLista.map(({ id, nome, preco, cores }) => {
          return (
            <div key={id}>
              <h1>{nome}</h1>
              <h2>Preço: {preco}</h2>
              <ul>
                {cores.map((cor) => (
                  <li key={cor} style={{ backgroundColor: cor }}>
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default App1;

/*
Para limpar de fato:

const App1 = () => {
  const novaListaFiltrada = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', ' ')) >= 2000,
  );

  Agora, mapeamos para criar um NOVO array com o preco modificado:

  const novaListaComPrecoLimpo = novaListaFiltrada.map((produto) => ({
    ...produto, // Copia todas as outras propriedades do produto
    preco: produto.preco.replace('R$ ', ''), 
    // Sobrescreve a propriedade preco
  }));

  // console.log(novaListaComPrecoLimpo); // Agora o preco não tem o R$

  return (
    <>
    ...
    </>
*/
