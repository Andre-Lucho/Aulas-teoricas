import React from 'react';

/*
useContext
------------------------------------------

createContext
------------------------------------

O contexto irá permitir passarmos dados/estado a todos os componentes (de forma global), sem a necessidade de utilizar propriedades (props). 
Serve principalmente para dodos/estados globais - exemplo dados do usuário logado. 
Deve ser importado na parte mais global do app ou onde queremos o acesso ao contexto global da aplicação.*/

// #UserContext.jsx

export const UserContext = React.createContext();
//*Estamos criando um contexto global para UserContext

/*
Provider
------------------------------------

userContext (que vem do React.createContext) possui 2 métodos: Consumer e Provider.

O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. 
Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto. */

//#App.jsx

import Produto from './Produto';
import userContext from './UserContext';

const App = () => {
  return (
    <UserContext.Provider value={{ nome: 'André' }}>
      <Produto />
    </UserContext.Provider>
  );
};

//** Acima, o componente <Produto> tem acesso ao contexto global do userContext (aqui um objeto anônimo contendo = nome: 'André')

export default App;

/*
useContext
------------------------------------


O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. 
Devemos passar o contexto criado como seu agumento.*/

//#Produto.jsx

// import UserContext from './UserContext';

export const Produto2 = () => {
  const user = React.useContext(UserContext);
  return <p>Produto de: {user.nome}</p>;
};

/*
GlobalStorage
------------------------------------

Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadoras do useState.*/

// #App.jsx

// import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

export const App2 = () => {
  return;
  <GlobalStorage>{<Produto />}</GlobalStorage>;
};

/* 
Importante:
O componente App não precisa acessar o contexto de GlobalContext diretamente, 
pois ele vai ser o "pai" dos componentes que o utilizarão. */

// #GlobalContext.js

export const GlobalContext = React.createContext();

export const GlobalStorage1 = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
// Filhos de 'GlobalContext' que irão herdar o contexto setado em na função 'GlobalStorage'

/*-------------------------------------------------------------------

Acima, o meu GlobalContext está funcionando a semelhança de um Objeto Global JS, onde tenho aceso a diversos 
métodos e prorpriedades (e também Hooks React) que eu setar, e que posso invocar em todo o meu projeto.
Todos esses métodos e propriedades vão estar listados e organizados apenas nesse arquivo onde eu crio o 'React.createContext();'

Depois, invoco com o React.useContext em qualquer componente!

-------------------------------------------------------------------------------------------- */

//#Produto.jsx

import { GlobalContext1 } from './GlobalContext';

export const Produto3 = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};
