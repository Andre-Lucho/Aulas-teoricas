import React from 'react';

const Select = () => {
  const [valorSelecionado, setValorSelecionado] = useState('');

  function handleChange(event) {
    setValorSelecionado(event.target.value);
  }

  return (
    <>
      <select value={valorSelecionado} onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
      ;
    </>
  );
};

export default Select;
