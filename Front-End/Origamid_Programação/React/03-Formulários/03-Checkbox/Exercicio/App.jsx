import { useState } from 'react';

const App = () => {
  const [cores, setCores] = useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  const handleChecked = (cor) => {
    return cores.includes(cor);
  };

  return (
    <div>
      <h1>Cores</h1>
      <form>
        {coresArray.map((cor) => {
          return (
            <label key={cor} style={{ textTransform: 'capitalize' }}>
              <input
                type="checkbox"
                value={cor}
                checked={handleChecked(cor)}
                onChange={handleChange}
              />
              {cor}
            </label>
          );
        })}
      </form>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
