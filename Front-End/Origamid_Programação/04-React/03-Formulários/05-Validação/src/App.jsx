import { useEffect, useState } from 'react';
import Input from './components/Input.jsx';

const App = () => {
  const [cep, setCep] = useState('');
  const [erro, setErro] = useState(null);

  useEffect(() => console.log(erro), [erro]);

  const validateCep = (value) => {
    const regex = /^\d{5}-?\d{3}$/;
    if (value.length === 0) {
      setErro('Preencha em valor');
      return false;
    } else if (!regex.test(value)) {
      setErro('Preencha com um CEP válido');
      return false;
    } else {
      setErro(null);
      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };

  // retorna true/false

  return (
    <>
      <Input
        id="cep"
        label="CEP"
        name="cep"
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {erro && <p>{erro}</p>}
    </>
  );
};

export default App;
