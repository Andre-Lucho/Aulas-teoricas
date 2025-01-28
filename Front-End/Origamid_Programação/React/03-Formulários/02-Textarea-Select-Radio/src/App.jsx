import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }
  console.log(radio);

  return (
    <section>
      <div>
        <form>
          <select
            value={select}
            onChange={({ target }) => setSelect(target.value)}
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
          </select>
          <p>{select}</p>
        </form>
      </div>
      <div>
        <form>
          <label>
            <input
              type="radio"
              value="notebook"
              name="aaa"
              checked={radio === 'notebook'}
              onChange={handleChange}
            />
            Notebook
          </label>
          <label>
            <input
              type="radio"
              value="smartphone"
              name="aaa"
              checked={radio === 'smartphone'}
              onChange={handleChange}
            />
            Smartphone
          </label>
          <label>
            <input
              type="radio"
              value="tablet"
              name="aaa"
              checked={radio === 'tablet'}
              onChange={handleChange}
            />
            Tablet
          </label>
        </form>
      </div>
    </section>
  );
};

export default App;
