import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const [dados, setDados] = React.useState('');
  return (
    <div className="div-container">
      <form onSubmit={handleAddProduct}>
        <Input id="nome" label="Nome Produto" />
        <Input id="preco" label="Preco" />
        <Input id="categoria" label="Categoria" type="select" />
        <Input id="descricao" label="Descricao" />
        <Button />
      </form>
    </div>
  );
};

export default Form;
