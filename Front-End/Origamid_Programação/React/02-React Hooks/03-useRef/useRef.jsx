/*
useRef (mto utilizado para formulários)
-----------------------------------------------
Retorna um objeto com a propriedade current. 
Esse objeto pode ser utilizado para guardarmos valores que irão PERSISTIR durante TODO O CICLO de vida do elemento (NÃO É REATIVO!)
Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.*/

// 1.
import React from 'react';

const App = () => {
  const div = React.useRef();

  console.log(div.current); // retorna undefined ==> como qquer hook, só é ativado após nova renderização
  React.useEffect(() => {
    console.log(div.current); // está apontando para a tag <div>
    console.log(div.current.className); //está apontando para a tag <div> e retornando sua classe
    console.log(div.current.innerText); // está apontando para a tag <div> e retornando seu texto
    // div = nome da variável escolhida
    // current = prorpiedade acessível de useRef
  }, []);

  // utilizar o Hook useRef após uma callback ou dentro de um useEffect, pois ele precisa receber novo valor p ser ativado

  return (
    <div ref={div} className="nova-classe">
      Texto da Div
    </div>
  );
  // ref = atributo especial que faz referência ou useRef
};

// 2. posso também dar novo valor a div.current:

const App2 = () => {
  const div = React.useRef();

  React.useEffect(() => {
    div.current = 'Teste';
    console.log(div.current); // Teste
  }, []);

  return <div ref={div} className="nova-classe"></div>;
};

/*
focus()
-----------------------------------------------
É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.
* estamos apontando para a tag input (similar --> document.querySelector(input)) 
*/

const App3 = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

/*
Referência
-----------------------------------------------
O seu uso não é restrito a elementos do Dom.
Podemos utilizar também para guardarmos a referência de qualquer valor**, como de um setTimeout por exemplo. 
** useRef NÃO é um hook reativo --> persiste durante todo o ciclo de vida do componente
*/

const App4 = () => {
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

/*

Olhar App.jsx:

  1. porem, devo limpar apos um certo tempo...então utilizo 'setTimeout':
  
  2. problema: depois de alguns cliques, MTAS 'setTimeouts' ficam agendadas, dando um bug na renderização da mensagem, qd uma 'setTimeout' agendada anteriormente é efetivada
  devo utiliza o 'clearTimeout()' - com uma referência de qd devo limpar o 'setTimeout' anterior... 

  3. o valor de 'referencia' não serve como uma referência boa ao 'clearTimeout' para apagar o 'setTimeout', pois ele sempre ZERA a cada nova renderização == devo utilizar o useRef, pois ele é estático e não zera a cada nova renderização e de um novo 'setTimeout' sendo agendado

  4. Agora, timeoutRef.current terá como referência sempre seu numero anterior, pois o hook não zera a cada nova renderização, já que ele (useRef) é estático!
  clearTimeout sempre limpa o setTimeout anterior, não ficando outros agendados (pois agora só tenho 1!), deixando apenas o último ativo
  */
