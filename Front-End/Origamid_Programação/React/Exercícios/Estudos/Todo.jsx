// // 2. Implement a filter to show only completed or uncompleted items.
// // 3. Implementar mais funcionalidades de um TODO List
// // 3.1. Use a more advanced CSS technique to animate the strikethrough effect.

import { useState } from 'react';

const App = () => {
  const [itens, setItens] = useState([
    {
      id: 'tarefa1',
      label: 'Tarefa 1',
      checked: false,
      task: '',
    },
  ]);

  function handleClick() {
    setItens((prev) => [
      ...prev,
      {
        id: `tarefa${prev.length + 1}`,
        label: `Tarefa ${prev.length + 1}`,
        checked: false,
        task: '',
      },
    ]);
  }

  function handleCheckedChange(id) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setItens((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: value } : item)),
    );
  }

  return (
    <div>
      <ul>
        {itens.map((item) => {
          const { id, label, task, checked } = item;
          return (
            <li key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type="text"
                id={id}
                placeholder="Adicione uma nova tarefa"
                value={task}
                onChange={handleInputChange}
              />
              <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={() => handleCheckedChange(id)}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>Nova Tarefa</button>
      <ul>
        {itens.map((item) => {
          if (item.task) {
            // verifica se não temos uma string vazia
            return <li key={item.id}>{item.task}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

// {
//   /* <span
// style={{
//   textDecoration: checked ? 'line-through' : 'none',
// }}
// > */
// }

export default App;
