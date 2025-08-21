import React from 'react';
/*
React Hooks
---------------------------------------
useEffect
----------

Todo componente possui um ciclo de vida. 
Os principais momentos acontecem quando o componente é:
1. renderizado*; 
2. atualizado(renderizado novamente) ou; 
3. desmontado.

Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.


IMPORTANTE:
  ----------------------------------------------- 
1. Entender que a Reatividade do React só tem efeito após a renderização de seus componentes (alteração de estado)
Então:
-----------------------------------------------
no Hook useState--> após setAlgo ser atualizado com NOVO VALOR e se ser renderizado novamente e;
no Hook useEffect --> é ativado somente após a execução de todo o código (incluindo o Return de App) ou após a renderização de um componente e 
qd ele tiver uma dependência, que mtas vezes está atrelada ao estado ('valor') de useState!! 

*** Em todos os casos, o useEffect SEMPRE é montado no PRIMEIRO carregamento do código e, caso tenha alguma dependência, 
SOMENTE será renderizado (tela) após contemplar a mudança da dependência!

2. 
-------------
O useEffect NÃO retorna dados através de um return!!
Usar um useState para atualizar estado e retornar algum dado!

3. 
-------------
Cuidar qual tipo de dependência irá controlar um estado(momento) do useEffect--> evitar loops infinitos
Ex. Fetch, onde a dependência são os valores (dados) a serem atualizados, o CORRETO é a const que controla o FETCH:
Caso deixe o valor dos 'dados', eles sempre sempre atualizados ao final do useEffect, invocando o seu callback novamente e de novo, infinitamente
* Geralmente, o que vai no IF no inicio do useEffect vai na dependência!



UseEffect x Assincronicidade:
---------------------------------------

1. Mto utilizado para controlar a quantidade de vezes que o script solicita dados do servidor
2. Ter um cuidado especial nos casos de assincronicidade! ==> INICIALMENTE teremos null, pois o fetch não terá dado o response! 

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
No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. 
A lista de dependências serve para informarmos quando o efeito deve ocorrer. 

*/
const App1 = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);
  /* 
  aqui => array com as dependências --> indica o que o useEffect observa --> se houver alteração na dependência*, ele executa a callback novamente; se não, não executa.
  *mesmo que for um valor igual ao anteior
  
  Uma Array VAZIA indica que o efeito NÃO POSSUI NENHUMA dependência,
  assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado) = 1x! 
  O efeito ocorre logo após a renderização do mesmo
  Ex. ** Busca de dados em um servidor - necessito APENAS 1X fazer essa busca!
  */

  console.log('Sempre ocorre, mas antes do useEffect');
  // Antes de renderizar e toda vez que atualizar o componente

  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);
  // Agora a dependência está no estado 'contar', assim sempre que contar for atualizar este efeito será ativado -- essa função callback irá ocorrer tatas vezes qtas eu ATUALIZAR o useState

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

/*
Dependências Obrigatórias
-----------------------------------------------
Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

*/
const App2 = () => {
  const [contar, setContar] = React.useState(0);

  const titulo = 'Clicou '; // não é um estado reativo == estado estático - está do lado de fora

  React.useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar) na dependência do useEffect
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

  // OBS. se tivesse 'dados' como dependência --> após concluir a requisição pelo fetch, 'setDados' atualizaria 'dados' pelo mesmo valor de antes(dados da API); porém, houve mudança de estado, mesmo que por um valor igual ao anteior --> haverá NOVA EXECUÇÃO do useEffect.
  // Nesse caso, deve estar vazia para uma única requisição a API

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
Podemos ter diversos useEffect no nosso código. 
O ideal é separarmos efeitos diferentes em useEffect diferentes.

Obs. Podemos ter +1 dependências no array do useEffect

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
As vezes, precisamos executar um efeito sempre que um componente for desmontado --> Ex. Modal, remover os 'eventListeners'...
Para isso utilizamos => 
  ** uma callback no RETORNO da 'callback pai' do efeito de hook useEffect (add um return ao useEffect)**

OBS.--> No caso abaixo, notar que a condição p/ renderização do componente 'Produto' está atrelada ao estado 'ativo'.
Cada vez que clico no botão, esse hook useState é atualizado. Então, preciso limpar o evento Dom, para que ele não fique repetido na página, consumindo recursos desnecessários.

*/
const Produto = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Utilizamos o useEffect para adicionarmos eventos direto ao DOM

    return () => {
      // ** return da callback de useEffect
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Limpa o evento ms antes de o elemento ser desmontado (removido do DOM (tela)).

  return <p style={{ height: '200vh' }}>Produto</p>; // ** return do componente 'Produto'
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
