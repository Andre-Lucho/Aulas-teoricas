/*
JSX Arrays
--------------------------------------

O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado. */

const App1 = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  return <p>{produtos}</p>;
};

/*
Keys
--------------------------------------
O JSX necessita de uma key única para cada elemento da Array. 

https://reactjs.org/docs/lists-and-keys.html */

const App2 = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};

/*
Map
--------------------------------------
É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array. 
Posso passar o index de .map(); Porém existem casos opnde pode ocorrer erro*/

const App3 = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

/*
Array de Objetos
--------------------------------------
O cenário mais comum é trabalhar com array's de objetos. */

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

const App5 = () => {
  return <section></section>;
};
