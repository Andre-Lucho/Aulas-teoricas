/* const App = () => {
  let ativo = true;

  function handleClick() {
    ativo = !ativo;
    console.log(ativo);
  }
return (
    <>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </>
  ); 
}

ACIMA:
--------------
Estou mudando o estado do componente; porém, o render não irá ser atualizado !!!
Por isso, utilizamos os Hooks! */

// import React from 'react';

// const App = () => {
//   /*
//   const ativoHook = React.useState('oi'); // Método do Objeto do React
//   console.log(ativoHook);
//   ativoHook == Array --> [arg, função ]
//   arg --> o que passo
//   função --> atualizador do Estado

//   Utilizo desestruturando essa array, como abaixo:

//   */
//   const [ativo, setAtivo] = React.useState(true);
//   // console.log(ativo);
//   const [dados, setDados] = React.useState({
//     nome: 'André',
//     idade: '43',
//     faculdade: true,
//   });
//   const { nome, idade, faculdade } = dados;

//   function handleClick() {
//     setAtivo(!ativo);
//     setDados({ ...dados, faculdade: !dados.faculdade });
//   }

//   return (
//     <>
//       <p>Nome: {nome}</p>
//       <p>Idade: {idade} </p>
//       <p>Faculdade: {faculdade ? 'Possui' : 'Não possui'} </p>

//       <button onClick={handleClick}>
//         {ativo ? 'Botão Ativo' : 'Botão Inativo'}
//       </button>
//     </>
//   );
// };

// export default App;

/* 
Props
------------------------------------ */
// import ButtonModal from './ButtonModal';
// import Modal from './Modal';

// const App1 = () => {
//   const [modal, setModal] = React.useState(false);

//   return (
//     <>
//       <div>{modal ? 'Modal OK' : 'Modal OFF'}</div>
//       <Modal modal={modal} setModal={setModal} />
//       <ButtonModal setModal={setModal} />{' '}
//       {/* setModal = é qquer nome (propriedade em ButtonModal.jsx)... o que está entre {} é a função de att do useState*/}
//     </>
//   );
// };

// export default App1;

// Obs.:
import react, { useState } from 'react';
// desestruturando o metodo useState do React --> posso evoca-lo diretamente

const App = () => {
  const [teste, setTeste] = useState(1);
  return <>App</>;
};

export default App;
