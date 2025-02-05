import React from 'react';
/*
useMemo;
-----------------------------------------------
Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. 
Recebe um callback e uma array de dependências 
( dependência --> para casos especiais q necessite que ele renderize novamente a cada atualização da dependência). 
Serve SOMENTE para casos em que você faz uma operação lenta da linguegem JavaScript* para retornar um valor.
* Ex. Operações matemáticas mto complexas e longas */

const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    // operação que retorna um valor
    const localStorageItem = localStorage.getItem('produto');
    console.log('useMemo foi executado'); // só será executado uma vez
    return localStorageItem;
  }, []);
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};

/* Verificação de uma operação lenta em JavaScript:
-----------------------------------------------------------------------

# método do Objeto performance-> performance.now(): == tempo(em ms) que o o browser leva até uma próxima operação

Abaixo == até próxima renderização

const tempo1 = performance.now()
**operação teste
performance.now() - tempo1 --> 
testei a performance antes da operação e novamente após ela e fiz uma subtração para ver o tempo que ela consome

/*useMemo Teste*/
function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App2 = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []); // armazenou o resultado da operação na memória
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};

/*
useCallback
-----------------------------------------------
Permite definirmos um callback e uma lista de dependências do callback. 
Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback. 
Dificilmente você irá encontrar um cenário em que essa função seja útil, pois seu uso não modifica a performance do código.

*/

const App3 = () => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return <button onClick={handleClick}>{contar}</button>;
};

/*
useCallback Teste
-----------------------------------------------
Uma prova de que o useCallback não irá criar uma nova função. 
Isso não significa que ele é mais ou menos otimizado. 
O JavaScript possui o chamado 'garbageCollector' --> limpa a memória para funções que não serão utilizadas;
Assim, a utilização do useCallback não melhora a performance do código

O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo. */

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App4 = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
