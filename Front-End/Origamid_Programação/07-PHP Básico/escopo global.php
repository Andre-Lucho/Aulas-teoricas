
<!-- Escopo de Variáveis em PHP: O Conceito Chave
Em PHP, o escopo de uma variável define onde essa variável pode ser acessada e utilizada. Existem dois escopos principais que se aplicam ao seu exemplo:

1. Escopo Global 🌍
Definição: Variáveis declaradas fora de qualquer função.

Acesso: Elas só podem ser acessadas fora das funções.

No seu código, $nome = 'Andre'; está no escopo global.

2. Escopo Local (da Função) ⚙️
Definição: Variáveis declaradas dentro de uma função.

Acesso: Elas só podem ser acessadas dentro daquela função específica.

Quando você tenta usar echo $nome; dentro de registrar_cpt_produto(), a função procura por uma variável $nome que tenha sido declarada dentro dela. Como não há, ela considera que a variável não existe neste escopo.

Portanto, por padrão, uma função PHP não pode "ver" variáveis que foram criadas fora dela (no escopo global).

🛠️ O Passo a Passo para Acessar Variáveis Globais
Para que a variável $nome seja acessível dentro da função, você precisa declarar explicitamente que deseja usar a versão global dessa variável. Existem duas formas principais de fazer isso:

Método 1: Usando a palavra-chave global (O mais comum)
Este é o método mais direto para indicar que você está se referindo à variável do escopo global.

Passo 1: Adicione global $nome; dentro da função
Você precisa colocar a palavra-chave global seguida do nome da variável logo no início da sua função, antes de tentar usá-la. -->

<?php
function registrar_cpt_produto(){
  // 👈 DECLARANDO QUE VAMOS USAR A VARIÁVEL GLOBAL
  global $nome; 
  
  echo $nome; // AGORA FUNCIONA! Vai exibir 'Andre'
  
  // ... resto do seu código ...
}

// Método 2: Usando o array $GLOBALS (Alternativa)
// O PHP mantém um array associativo especial chamado $GLOBALS, que armazena todas as variáveis declaradas no escopo global. 
// Você pode acessá-las usando a chave correspondente ao nome da variável.

// Passo 1: Acesse a variável através do array $GLOBALS

function registrar_cpt_produto2(){
  // 👈 ACESSANDO DIRETAMENTE A CHAVE 'nome' DO ARRAY GLOBAL
  echo $GLOBALS['nome']; // AGORA FUNCIONA! Vai exibir 'Andre'
  
  // ... resto do seu código ...
}

?>