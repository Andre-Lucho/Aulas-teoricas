import React from 'react';
import { useRef } from 'react';

// # 1.
// const App = () => {
//   const div = React.useRef();

//   React.useEffect(() => {
//     // div.current = 'teste';
//     console.log(div.current.className);
//   }, []);

//   return (
//     <div ref={div} className="nova-classe">
//       Nova Div
//     </div>
//   );
// };

//  # 2.
// const App = () => {
//   const [comentarios, setComentarios] = React.useState([]);
//   const [input, setInput] = React.useState('');
//   const inputElement = React.useRef();

//   function handleClick() {
//     setComentarios([...comentarios, input]);
//     setInput('');
//     inputElement.current.focus();
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((coment, i) => (
//           <li key={i}>{coment}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={input}
//         onChange={({ target }) => setInput(target.value)}
//         ref={inputElement}
//       />
//       <button style={{ marginTop: '15px' }} onClick={handleClick}>
//         Enviar
//       </button>
//     </div>
//   );
// };

// pq seguiu renderizando novos li's  com a nova function abaixo: ??

// function handleClick({ target }) {
//   if (target.value !== null) {
//     setComentarios([...comentarios, input]);
//     setInput('');
//   } else {
//     setComentarios([...comentarios]);
//   }
// }

/* estamos utilizando React. 
      Quem está setando novos valores para o campo da tag input é 'setInput' -- REATIVAMENTE
      a tag <input> é reativa a novos valores, então tenho useState em input.
      Por isso, defino setInput como '' " no callback de handleClick p/ limpar o campo de input e não necessito do código acima
      
      Mas, sendo mais específico:\
      tenho um value {input} e comentarios sendo att por setComentarios([...comentarios],INPUT), então, a cada att de comentarios, o valor de input tb atualiza!
      */

// # 3.

// const App = () => {
//   const [carrinho, setCarrinho] = React.useState(0);
//   const [notificacao, setNotificacao] = React.useState(null);

//   let referencia = 0;

//   function handleClick() {
//     setCarrinho(carrinho + 1);
//     setNotificacao('Novo item add ao carrinho com sucesso!'); // 1.

//     console.log(referencia); // 3.

//     clearTimeout(referencia);
//     referencia = setTimeout(() => {
//       setNotificacao(null);
//     }, 2000);

//     // 2.
//     console.log(referencia);

//     return (
//       <div>
//         <p>{notificacao}</p>
//         <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
//       </div>
//     );
//   }

// 3.1
const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Novo item add ao carrinho com sucesso!'); // 1.

    console.log(timeoutRef.current); //4

    // 4
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
      // console.log('teste');
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

  4. Agora, timeoutRef.current terá como referência sempre seu numero anterior, pois o hook não zera a cada nova = não há nova renderização, já que ele (useRef) é estático!
  clearTimeout sempre limpa o setTimeout anterior, não ficando outros agendados (pois agora só tenho 1!), deixando apenas o último ativo
  */

export default App;
