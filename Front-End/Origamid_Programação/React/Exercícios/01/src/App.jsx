import { useState, useEffect, useCallback } from 'react';
import Historical from './Historical';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [userNegInput, setUserNegInput] = useState('');
  const [historical, setHistorical] = useState([]);

  function handleIncrement() {
    // if (counter < 10) setCounter((anterior) => anterior + 1);
    setCounter((prev) => (prev < 10 ? prev + 1 : prev));
    //
  }

  function handleDecrement() {
    // if (counter > 0) setCounter((anterior) => anterior - 1);
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleReset() {
    setCounter(0);
    setHistorical([]);
  }

  function handleUserInput({ target }) {
    setUserInput(target.value);
  }

  function handleUserNegInput({ target }) {
    setUserNegInput(target.value);
  }

  useEffect(() => {
    if (userInput) {
      // setCounter(counter + Number(userInput));
      setCounter((prev) => prev + Number(userInput));
      setUserInput('');
    }
  }, [userInput]);

  useEffect(() => {
    if (userNegInput) {
      // setCounter(counter - Number(userNegInput));
      setCounter((prev) => prev - Number(userNegInput));
      setUserNegInput('');
    }
  }, [userNegInput]);

  useEffect(() => {
    if (counter != 0) setHistorical((prev) => [...prev, counter]);
  }, [counter]);

  return (
    <>
      <main>
        <section className="inputs">
          <div>
            <label htmlFor="increment-input">
              Digite um valor para incrementar:{' '}
            </label>
            <input
              type="text"
              name="increment-input"
              id="increment-input"
              className="entrada"
              value={userInput}
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label htmlFor="decrement-input">
              Digite um valor para decrementar:{' '}
            </label>
            <input
              type="text"
              name="decrement-input"
              id="decrement-input"
              className="entrada"
              value={userNegInput}
              onChange={handleUserNegInput}
            />
          </div>
        </section>
        <section className="buttons">
          <button onClick={handleIncrement}>Aumentar</button>
          <button onClick={handleDecrement}>Diminuir</button>
          <button onClick={handleReset}>Resetar</button>
          <h1>Contador: {counter}</h1>
          <h2>Histórico</h2>
          <div>
            <Historical historical={historical} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
