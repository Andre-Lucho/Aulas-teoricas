import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <Input />
      <p>
        <label htmlFor="email">Email</label>
        <Input />
        <br />
        <Button />
      </p>
    </form>
  );
};

export default Form;
