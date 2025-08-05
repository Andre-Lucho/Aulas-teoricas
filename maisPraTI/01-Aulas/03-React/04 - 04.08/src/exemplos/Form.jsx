import React from 'react';
import Button from './Button';
import Input from '../Input';

const Form = () => {
  return (
    <div className="div-container">
      <form>
        <Input id="email" label="Email" required />
        <Input id="senha" label="Senha" type="password" />
        <Button />
      </form>
    </div>
  );
};

export default Form;
