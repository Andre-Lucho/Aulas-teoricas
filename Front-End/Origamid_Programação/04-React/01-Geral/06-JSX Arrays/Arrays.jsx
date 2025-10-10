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
