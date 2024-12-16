import React from 'react';
/*
React Hooks
useEffect
-----------------------------------------------

Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. 
Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

*/
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  });

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

/*
Array de Dependências
-----------------------------------------------
No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer. 

*/
const App1 = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);
  /* 
  
  Uma Array VAZIA indica que o efeito NÃO POSSUI NENHUMA dependência,
  assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado).   O efeito ocorre logo após a renderização do mesmo
  Ex. ** Busca de dados em um servidor - necessito APENAS 1X fazer essa busca!
  */

  console.log('Sempre ocorre, mas antes do useEffect');
  // Antes de renderizar e toda vez que atualizar o componente

  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);
  // Agora a dependência está no estado contar, assim sempre que contar for atualizar este efeito será ativado -- essa função callback irá ocorrer tatas vezes qtas eu atualizar o useState

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

/*
Dependências Obrigatórias
-----------------------------------------------
Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

*/
const App2 = () => {
  const [contar, setContar] = React.useState(0);

  const titulo = 'Clicou '; // não é um estado reativo == estado estático

  React.useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

/*
Componente Montou
-----------------------------------------------
O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

*/

const App3 = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

/*
Múltiplos Efeitos
-----------------------------------------------
Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.

*/
const App4 = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  React.useEffect(() => {
    setContar(0);
  }, [modal]);

  return (
    <div>
      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

/*
Antes de Desmontar
-----------------------------------------------
As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.

*/
const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <p style={{ height: '200vh' }}>Produto</p>;
};

const App5 = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
};
