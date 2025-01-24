import { useState } from 'react';

const InputTag = () => {
  const [tarefa, setTarefa] = useState('');
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems((prev) => [...prev, tarefa]);
  }
  return (
    <section className="inputs">
      <label htmlFor="lista">Digite uma nova tarefa:</label>
      <input
        type="text"
        id="lista"
        value={tarefa}
        onChange={({ target }) => setTarefa(target.value)}
      />
      <button onClick={handleClick}>Atualizar</button>
    </section>
  );
};

export default InputTag;
