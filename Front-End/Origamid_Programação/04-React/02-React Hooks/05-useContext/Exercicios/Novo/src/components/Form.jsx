import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext';

const Form = () => {
  const context = useContext(GlobalContext);
  const { userInput } = useContext(GlobalContext);

  function handleForm(e) {
    e.preventDefault();
    context.getData();
  }

  return (
    <div>
      <form className="search-container" onSubmit={handleForm}>
        <label htmlFor="input">Digite um Produto</label>
        <input
          type="text"
          id="input"
          value={userInput}
          placeholder="Buscar produto"
          onChange={({ target }) => context.setUserInput(target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <button onClick={() => context.cleanData()}> Limpar</button>
    </div>
  );
};

export default Form;
