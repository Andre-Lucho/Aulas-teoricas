import react from 'react';

/*
Exercício

Organize os produtos como mostrado no vídeo
Mostre apenas produtos que forem mais caros que R$ 1500 

const App4 = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter(({ ano }) => ano >= 1998) // desestruturando 'livros'
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};


*/

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

function App() {
  const regexp = /[R$]/g;
  return (
    <>
      <ul>
        {produtos
          .map(({ preco }) => preco.replace(regexp, ''))
          .filter((item) => {
            item > 1500;
          })
          .map(({ id, nome, preco, cores }) => {
            <li key={id}>
              <h1>{nome}</h1>
              <h2>Preço: R$ {preco}</h2>
            </li>;
          })}
      </ul>
    </>
  );
}

export default App;
