// // 2. Implement a filter to show only completed or uncompleted items.
// // 3. Implementar mais funcionalidades de um TODO List
// // 3.1. Use a more advanced CSS technique to animate the strikethrough effect.

import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);

  function handleInputChange({ target }) {
    const { value } = target;
    setInputValue(value);
  }

  function handleClick() {
    setTask((prev) => [...prev, inputValue]);
    setInputValue('');
  }

  return (
    <div>
      <h1>Lista de Tarefas Diárias</h1>
      <form action="">
        <input
          type="text"
          id={'input'}
          placeholder="Adicione uma nova tarefa"
          value={inputValue.valor}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Adicionar Tarefa</button>
      </form>
      <ul>
        {task &&
          task.map((item, i) => {
            if (item) {
              // verifica se não temos uma string vazia
              return <li key={i}>{item}</li>;
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

{
  /* <input
type="checkbox"
id={id}
checked={checked}
onChange={() => handleCheckedChange(id)} */
}

export default App;
