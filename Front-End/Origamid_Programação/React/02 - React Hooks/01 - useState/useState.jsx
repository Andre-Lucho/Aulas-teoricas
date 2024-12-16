/*
React Hooks 
useState
--------------------------------------------------------

Estado
------------------------------------
O estado de uma aplicação representa as características dela naquele momento. 
Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato:
Os dados do usuário foram carregados --> faca tal coisa... se não,outra;
Se o botão está ativo, acontece tal coisa; se estiver inativo, outra e etc. */

const App = () => {
  const ativo = true;

  return (
    <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
  );
};

/*
Hooks
------------------------------------

Os Hooks são funções especiais do React que permitem CONTROLARMOS O ESTADO e o ciclo de vida de componentes funcionais. 
Isso antes só era possível com classes. */

const App1 = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

/*
React.useState
------------------------------------

O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como: strings, arrays, números, boolean, null, undefined e objetos. 
O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão RENDERIZADOS NOVAMENTE e os seus filhos também. 
É isso que garante a reatividade de componentes funcionais no React.*/

const App2 = () => {
  const [ativo, setAtivo] = React.useState(true);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

// O uso de 'setNome' é uma convenção do React para a função de modificação do estado

/*
Múltiplos Estados
------------------------------------

Não existem limites para o uso do useState, podemos definir diversos no mesmo componente e com diversos dados que o Estado irá verificar. */

const App3 = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: '', idade: '' });

  return <div></div>;
};

/* IMPORTANTE 
------------------------------------

Quando usar +1 useStade, qd tenho multiplos elementos em um Objeto ou uma Array, por exemplo que quero controlar seu estado??
--> qd esses elementos não forem ser atualizados ao mesmo tempo == forem independentes!!
Qd quiser que isso aconteça, faço outro useState em separado */

/*

Props
------------------------------------
Podemos passar o estado e a função de modificação como propriedades para outros elementos. */

import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App4 = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App4;

// ButtonModal.jsx

const ButtonModal1 = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir Modal</button>;
};

// export default ButtonModal;

// Modal.jsx

const Modal1 = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  return null;
};

// export default Modal;

/*
Reatividade - IMPORTANTE
-----------------------------------------

Não modifique o estado diretamente. 
Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.*/

const App5 = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function handleClick() {
    items.push('Novo Item');
    // Errado. od valores de 'items' serão att, porém NÃO SERÃO renderizados
    // Modifique o estado apenas com a função de atualização (setItems)
  }

  function handleClickReativo() {
    setItems([...items, 'Novo Item']);
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
};

/*
Callback
------------------------------------

Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.*/

const App6 = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
    // o valor 'anterior' é o mesmo valor de ativo, porém está sendo recebido indiretamente.
    // o retorno da função de callback será o novo valor de setAtivo
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};

/*
Callback Valor Inicial

A definição do estado inicial também pode ser feita com um callback.*/

const App7 = () => {
  const [ativo, setAtivo] = React.useState(() => {
    const ativoLocal = window.localStorage.getItem('ativo');
    return ativoLocal;
  });
  // Callback no estado inicial, só será executado na criação do componente, buscando as informações do localStorage gravadas no browser do usuário

  function handleClick() {
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};

/*
React.StrictMode

O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas.

Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas. */

const Contador = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      setItems((items) => [...items, 'Item ' + (contar + 1)]);
      return contar + 1;
    });
  }

  function handleClick2() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      return contar + 1;
    });
    setItems((items) => [...items, 'Item ' + (contar + 1)]);
    // Tirar o efeito de dentro do setContar irá concertar o erro
    // setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};
