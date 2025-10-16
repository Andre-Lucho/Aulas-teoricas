/*
Essa é uma dúvida fundamental e crucial para entender como o React funciona. Sua confusão é muito comum para quem está começando a lidar com a renderização de componentes e a passagem de funções como props.

Vou explicar o conceito didaticamente, aplicando-o diretamente aos seus arquivos FlashcardPage.jsx e FlashCard.jsx.

Eventos em React: O Conceito de Referência vs. Execução
Seu entendimento está parcialmente correto. Um evento de clique (como o onClick no FlashCard.jsx) só é disparado quando o usuário clica no elemento. O ponto de confusão é o que acontece antes de o usuário clicar, ou seja, durante o ciclo de renderização do componente pai.


1. A Fase de Renderização (Onde o Erro Acontece)
Quando o React renderiza o componente FlashcardPage.jsx, ele executa o código que está dentro da função FlashcardPage(). Na seção de mapeamento (flashcardsData.map), ele avalia o JSX para cada item:

JavaScript

// Código em FlashcardPage.jsx
<FlashCard
  // ...
  handleDelete={handleDeleteFlashcard(item.id)} // <--- PROBLEMA AQUI!
  handleUpdate={() => handleRequestUpdateFlashcard(item)}
/>

A Falha na Lógica: Chamar a Função Imediatamente
Na linha com o erro, o que está entre chaves {} não é interpretado como um handler a ser executado no futuro. É interpretado como uma expressão JavaScript que deve ser resolvida imediatamente para determinar o valor da prop handleDelete.

React Vê handleDelete={handleDeleteFlashcard(item.id)}.

O React executa a função handleDeleteFlashcard(item.id) NAQUELE INSTANTE para saber qual valor deve ser atribuído à prop handleDelete.

A função handleDeleteFlashcard é executada, fazendo uma chamada assíncrona para deleteFlashcardAPI. Isso causa o efeito colateral indesejado (a exclusão do flashcard).

O valor retornado por handleDeleteFlashcard (uma Promise que resolve em undefined) é o que é passado para a prop.

Em resumo: você não estava passando a referência da função para o clique; você estava passando o resultado da execução da função no momento da renderização.


2. A Solução: Passando uma Referência (A Função Anônima)
A chave para o correto acionamento de eventos é garantir que o componente filho receba uma referência a uma função, e não o resultado de sua execução.

Compare com a implementação do handleUpdate:

JavaScript

// Código em FlashcardPage.jsx
handleUpdate={() => handleRequestUpdateFlashcard(item)}
A Lógica Correta: Função de Agendamento
Ao usar a arrow function (() => ...), você está criando uma nova função anônima durante a renderização.

React Vê handleUpdate={() => handleRequestUpdateFlashcard(item)}.

O React NÃO executa handleRequestUpdateFlashcard.

O valor da prop handleUpdate se torna a referência a essa nova função anônima.

Essa função anônima é o que o FlashCard armazena.


3. A Fase de Evento (Onde a Referência é Usada)
No componente filho FlashCard.jsx, o onClick espera uma referência de função:

JavaScript

// Código em FlashCard.jsx
// ...
<AiFillDelete
  className="flashdash-icons"
  onClick={handleClickDelete} // handleClickDelete usa o prop
  // ...
/>

// ...
const handleClickDelete = (e) => {
  e.stopPropagation();
  handleDelete(); // <--- Chama a referência!
};

O Fluxo Correto com a Refatoração:
Renderização: O FlashcardPage atribui a handleDelete a referência à função () => handleDeleteFlashcard(item.id).

Ação do Usuário: O usuário clica no ícone AiFillDelete.

Evento: O onClick dispara handleClickDelete.

Execução: handleClickDelete chama handleDelete(), o que, por sua vez, executa a função que foi passada na renderização: handleDeleteFlashcard(item.id).

Resultado: A exclusão do flashcard só ocorre no momento certo, após o clique.

Implementação Final Corrigida
Para garantir que o handleDelete funcione como o handleUpdate, o código no FlashcardPage.jsx deve ser ajustado para passar uma função de callback (referência):

No arquivo FlashcardPage.jsx (Linha 210):

JavaScript

// Antes (ERRADO):
handleDelete={handleDeleteFlashcard(item)} 

// Depois (CORRETO):
handleDelete={() => handleDeleteFlashcard(item.id)}
Com essa mudança, você passa a referência de uma função que irá chamar a lógica de exclusão com o id correto, e ela só será executada quando o onClick for acionado pelo usuário.

*/
