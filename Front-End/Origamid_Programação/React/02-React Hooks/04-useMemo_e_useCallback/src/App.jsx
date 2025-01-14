import React from 'react';

// 1.

// const App = () => {
//   const [contar, setContar] = React.useState(0);

// React.useEffect(() => {
//   const local = localStorage.setItem('produto', 'produto1');
// }, []);
// const valor = React.useMemo(() => {
// const localStorageItem = window.localStorage.getItem('produto');
// console.log('useMemo foi executado');
// return localStorageItem;
// }, []);
// console.log(valor);

//   return <button onClick={() => setContar(contar + 1)}></button>;
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
  console.log(performance.now() - tempo1);

  return <button onClick={() => setContar(contar + 1)}></button>;
};

export default App;
