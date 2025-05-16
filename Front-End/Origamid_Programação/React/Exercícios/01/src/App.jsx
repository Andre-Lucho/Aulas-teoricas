import { useState, useEffect } from 'react';
import Historical from './Historical';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    counter !== 0 ? setDataList((prev) => [...prev, counter]) : null;
  }, [counter]);

  // pq usar a callback com o valor anterior?
  // counter de fora =0 --> não está em uma array! na primeira renderização anterior = null

  function handleIncrement() {
    inputData != 0
      ? setCounter((prev) => prev + Number(inputData))
      : setCounter((prev) => (prev < 10 ? prev + 1 : prev));
  }

  function handleDecrement() {
    inputData != 0
      ? setCounter((prev) => prev - Number(inputData))
      : setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  }
  // setCounter((anterior) => (anterior < 10 ? counter + 1 : anterior)); '...counter' ==> errado
  // setCounter((anterior) => (anterior > 0 ? counter  - 1 : anterior)); '...counter'   ==> errado
  // 2x acima: Usamos 'prev' para garantir que o valor atualizado em 'counter' seja considerado.

  function handleReset() {
    setCounter(0);
    setDataList([]);
    setInputData('');
  }

  function handleChange({ target }) {
    setInputData(Number(target.value));
  }
  // setInputData((prev) => Number(prev || '') + counter) = sugestão ?? analizar

  return (
    <>
      <div>
        <h2>Valor Final: {counter > 0 && counter}</h2>
      </div>
      <div>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Diminuir</button>
        <button onClick={handleReset}>Resetar</button>
      </div>
      <div>
        <label htmlFor="numb">Acrescente ou diminua manualmente: </label>
        <input
          type="text"
          id="numb"
          value={inputData}
          onChange={handleChange}
        />
      </div>
      {dataList && <Historical dataList={dataList} />}
    </>
  );
};

export default App;

// Efeito de atualizar counter( somar ) automaticamente, sem clicar no botão:
// useEffect(() => {
//   if (inputData) {
// //setCounter(counter + inputData);
//     setCounter((prev) => prev + Number(inputData));
//     setInputData('');
//   }
// }, [inputData]);
// (prev ? prev : 0) sugestão ?? analizar
