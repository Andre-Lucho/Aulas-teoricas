// Props
import { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const AppModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div>{modal ? 'Modal ON' : 'Modal OFF'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />{' '}
      {/* setModal = é qquer nome (propriedade em ButtonModal.jsx)... o que está entre {} é a função de att do useState*/}
    </>
  );
};

// const App = () => {
//   const [contar, setContar] = React.useState(1);
//   const [items, setItems] = React.useState(['Item 1']);

//   function handleClick() {
//     setContar((contar) => contar + 1);
//     setItems((items) => [...items, 'Item ' + (contar + 1)]);
//   }

// ou

// function handleClick() {
//   setContar(contar + 1);
//   setItems([...items, 'Item ' + (contar + 1)]);
// }

//   return (
//     <>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//       <button onClick={handleClick}>{contar}</button>
//     </>
//   );
// };

export default AppModal;
