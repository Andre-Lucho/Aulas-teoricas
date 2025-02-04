import { useState } from 'react';
import List from './List';
// import InputTag from './InputTag';

const App = () => {
  const [task, setTask] = useState([]);
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // function handleTask({ target }) {
  //   setTask([...target.value]);
  // }

  return (
    <>
      <div className="header">
        <h1>TODO List</h1>
        <h2>Lista de Tarefas:</h2>
      </div>
      <ul>
        {task.map((item, i) => (
          <li key={i}>
            <label htmlFor="task">Tarefa 0{i + 1}</label>
            <input type="checkbox" id="task" />
          </li>
        ))}
      </ul>
      {/* <List task={task} /> */}
      <button onClick={setTask([task + 1])}>Adicionar</button>
    </>
  );
};

export default App;
