import React, { useState, useRef } from 'react';

const App2 = () => {
  const [comentarios, setComentarios] = React.useState([
    'comentario 1',
    'comentario 2',
    'comentario 3',
  ]);
  const [input, setInput] = useState('');
  const inputElement = useRef();

  function handleClick() {
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
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App2;
