import React from 'react';

// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);
//   const [dados, setDados] = React.useState({
//     nome: 'André',
//     idade: '43',
//     faculdade: false,
//   });
//   const [contar, setContar] = React.useState(0);

//   const { nome, idade, faculdade } = dados;

//   function handleClick() {
//     setAtivo(!ativo);
//     setDados({ ...dados, faculdade: !dados.faculdade });
//     setContar((contar) => contar + 1);
//   }
//   return (
//     <>
//       <p>{nome}</p>
//       <p>{idade}</p>
//       <p>{faculdade ? 'Possui faculdade' : 'Não Possui'}</p>
//       <p>{contar}</p>
//       <button onClick={handleClick}>
//         {ativo ? 'Botão Ativo' : 'Botão Inativo'}
//       </button>
//     </>
//   );
// };

/*ACIMA:
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

// Props
// ------------------------------------
// import ButtonModal from './ButtonModal';
// import Modal from './Modal';

// const App = () => {
//   const [modal, setModal] = React.useState(false);

//   return (
//     <>
//       <div>{modal ? 'Modal ON' : 'Modal OFF'}</div>
//       <Modal modal={modal} setModal={setModal} />
//       <ButtonModal setModal={setModal} />{' '}
//       {/* setModal = é qquer nome (propriedade em ButtonModal.jsx)... o que está entre {} é a função de att do useState*/}
//       </>
//     );
//   };

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => contar + 1);
    setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  // ou

  // function handleClick() {
  //   setContar(contar + 1);
  //   setItems([...items, 'Item ' + (contar + 1)]);
  // }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
