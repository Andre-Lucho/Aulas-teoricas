import React, { useState } from 'react';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  function addTodo() {
    if (inputText.trim()) {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  }
  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
