import { useState, useEffect } from 'react';
import Titulo from './components/Title';
import Button from './components/Buttons';
import Produto from './components/Product';

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const prodStorage = localStorage.getItem('produto');
    if (prodStorage) setProduto(prodStorage);
  }, []);

  useEffect(() => {
    if (produto) localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <Titulo tagName="Preferências" />
      <Button tagName="Notebook" onClick={handleClick} />
      <Button tagName="Smartphone" onClick={handleClick} />
      {produto && <Produto produto={produto} />}
    </>
  );
};

/* 
* posso, também, passar key= {produto} no componente Produto, forçando o React a tratar cada produto como um componente completamente novo. Quando a key muda (neste caso, quando o valor da variável 'produto' muda), o React não tenta apenas atualizar o componente, ele o remove completamente da tela (desmonta) e cria uma nova instância (monta) com o novo valor. 
--> Não é a melhor escolha
*/

export default App;
