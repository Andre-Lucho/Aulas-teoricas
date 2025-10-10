import { createContext, useState } from 'react';

export const GlobalContext = createContext(); // escopo do contexto --> esse deve ser IMPORTADO e CONSUMIDO

export const GlobalStorage = ({ children }) => {
  // Quais elementos dentro do escopo estou exportando p todo projeto :
  // Esse serão os elementos que irei passar no meu Provider
  const [comprar, setComprar] = useState(0);

  function handleClick() {
    setComprar((prev) => prev + 1);
  }

  function comprarDois() {
    setComprar((comprar) => comprar + 2);
  }

  return (
    <GlobalContext.Provider
      value={{
        nome: 'André',
        comprar,
        setComprar, //2
        handleClick,
        comprarDois,
      }}
      // 1. passando o Provider aqui
      // 2. Lembrando --> objetos que tenham prop e valor com o mesmo nome, passo apenas o nome da prop 1x!
    >
      {children}
    </GlobalContext.Provider>
  );
};

/*
OBS:
Estou exportanto 2 constantes --> 
GlobalContext --> Contexto para ser consumido
GlobalStorage --> ESCOPO do contexto (GlobalContext) =(todos os elementos que irei utilizar em outros componentes
*/
