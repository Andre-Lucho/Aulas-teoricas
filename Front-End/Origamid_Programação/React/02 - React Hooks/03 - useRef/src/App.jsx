import React from 'react';

// const App = () => {
//   const div = React.useRef();

//   React.useEffect(() => {
//     div.current = 'teste';
//     console.log(div.current);
//   }, []);

//   return (
//     <div ref={div} className="nova-classe">
//       Nova Div
//     </div>
//   );
// };

const App = () => {
  const [comentarios, setComentarios] = React.useState(['teste', 'teste02']);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick({ target }) {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((coment, i) => (
          <li key={i}>{coment}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        ref={inputElement}
      />
      <button style={{ marginTop: '15px' }} onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
};

export default App;

// pq seguiu renderizando novos li's  com a nova function abaixo: ??

// function handleClick({ target }) {
//   if (target.value !== null) {
//     setComentarios([...comentarios, input]);
//     setInput('');
//   } else {
//     setComentarios([...comentarios]);
//   }
// }
