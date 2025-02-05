import React from 'react';

// 1.

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   React.useEffect(() => {
//     const local = localStorage.setItem('produto', 'produto1');
//   }, []);
//   const valor = React.useMemo(() => {
//     const localStorageItem = localStorage.getItem('produto');
//     console.log('useMemo foi executado');
//     return localStorageItem;
//   }, []);
//   console.log(valor);

//   return <button onClick={() => setContar(contar + 1)}>Botão = {contar}</button>;
// };

// 2.
function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  const tempo1 = performance.now();
  console.log(tempo1);
  const operação = React.useMemo(() => operacaoLenta(), []);
  console.log(operação);
  const tempo2 = performance.now();
  console.log(tempo2 - tempo1);

  return <button onClick={() => setContar(contar + 1)}></button>;
};

export default App;

//  Na primeira renderização, levou +100ms ; com o resultado da operação ARMAZENADO, levou -1 ms para trazer o resultado!
