//Create a React application that displays a dynamic list of items. Each item in the list should have a checkbox that, when clicked, adds a strikethrough (tachado) to the item's text, indicating it as completed.

// 1.

import React, { useEffect, useState } from 'react';

const App = () => {
  const [itens, setItens] = useState([
    {
      id: 'checkbox1',
      label: 'Texto 1',
      checked: false,
    },
  ]);

  function handleClick() {
    setItens((prev) => [
      ...prev,
      {
        id: `checkbox${prev.length + 1}`,
        label: `Texto ${prev.length + 1}`,
      },
    ]);
  }

  function handleChange(id) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }
  // pq não utilizar [] envolvendo setItens((prev)) => como na function anterior?
  // pq o metodo .map já retorna uma array!!! caso acima, teria: [[]] == array envolvida por outra array
  // observar a presença ou falta de return!

  return (
    <div>
      <ul>
        {itens.map((item, i) => {
          const { id, label, checked } = item; // aqui, item é são os elemetos da Array --> estou desest. as propriedades de cada objeto dentro de sua respectiva posição na array
          return (
            <li key={i}>
              <label htmlFor={id}>
                <span
                  style={{
                    textDecoration: checked ? 'line-through' : 'none',
                  }}
                >
                  {label}
                </span>
              </label>
              <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={() => handleChange(id)}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>Inserir</button>
    </div>
  );
};

export default App;

/*
2. 
Com outro estado para atualizar APENAS a chave 'label'

  const [texto, setTexto] = useState(1);
  const [itens, setItens] = useState([
    {
      id: 'checkbox',
      type: 'checkbox',
      label: ['Texto ' + texto],
    },
  ]);

  function handleClick() {
    setTexto((prev) => (prev + 1));
    // outra forma (utilizando tamanho e posição de 1 array): setTexto((prev) => [...prev, prev[prev.length - 1] + 1]);
    // useState deve estar como [ ] também
    
    setItens((prev) => ({
      ...prev,
      label: [...prev.label, 'Texto ' + (prev.label.length + 1)],
    }));
  }
  if (itens == null) return null;
  if (itens) {
    const [id, type, label] = itens;
    return (
      <div>
        <ul>
        {itens.map((id, type, label, i) => {
          <li key={i}>
            label.map((label, i) => (
                <label key={i}>{label}</label>
                <input type={type} id={id} />
              </li>
            ));
          })}
        </ul>
        <button onClick={handleClick}>Inserir</button>
      </div>
    );
  }

  */
