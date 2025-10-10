import React from 'react';

/*
3- Sem useRef():
------------------------------------ */

// const App3 = () => {
//   const [carrinho, setCarrinho] = React.useState(0);
//   const [notificacao, setNotificacao] = React.useState(null);

//   let referencia = 0;

//   function handleClick() {
//     setCarrinho((prev) => prev + 1);
//     setNotificacao('Novo item add ao carrinho com sucesso!'); // 1.

//     console.log(referencia); // 3.

//     clearTimeout(referencia);
//     referencia = setTimeout(() => {
//       setNotificacao(null);
//     }, 1500);

//     // 2.
//     // console.log(referencia);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
//       <p>{notificacao}</p>
//     </div>
//   );
// };

/*

3.1 - corrigido com useRef():
------------------------------------ */

const App3 = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho((prev) => prev + 1);
    setNotificacao('Novo item add ao carrinho com sucesso!'); // 1.

    console.log(timeoutRef.current); //4

    // 4
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
    console.log(timeoutRef.current); //4
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

/*
  1. porem, devo limpar apos um certo tempo...então utilizo 'setTimeout':
  
  2. problema: depois de alguns cliques, MTAS 'setTimeouts' ficam agendadas, dando um bug na renderização da mensagem, qd uma 'setTimeout' agendada anteriormente é efetivada
  devo utiliza o 'clearTimeout()' - com uma referência de qd devo limpar o 'setTimeout' anterior... 

  3. o valor de 'referencia' não serve como uma referência boa ao 'clearTimeout' para apagar o 'setTimeout', pois ele sempre ZERA a cada nova renderização == devo utilizar o useRef, pois ele é estático e não zera a cada nova renderização e de um novo 'setTimeout' sendo agendado

  4. Agora, timeoutRef.current terá como referência sempre seu numero anterior, pois o hook não zera a cada nova renderização, já que ele (useRef) é estático!
  clearTimeout sempre limpa o setTimeout anterior, não ficando outros agendados (pois agora só tenho 1!), deixando apenas o último ativo
  */

export default App3;
