/*
1) Objeto FormData():
--------------------------------------
--------------------------------------

O objeto FormData é um elemento fundamental quando trabalhamos com formulários e a necessidade de enviar dados, especialmente arquivos, via JavaScript de forma assíncrona (como em uma chamada AJAX ou Fetch API), sem a necessidade de um submit tradicional.

Entendendo o Objeto FormData:
-----------------------------------
O objeto FormData é uma forma de estruturar e representar os dados de um formulário HTML em pares de chave/valor, exatamente como os dados seriam enviados se o formulário tivesse sido submetido pelo navegador de maneira tradicional (com o atributo enctype="multipart/form-data").

Passo 1:
-------- 
O Que Ele Faz?
Ele simula a maneira como um navegador constrói os dados do formulário antes de enviá-los ao servidor.

Para quê serve? 
----------------
Permite que você construa programaticamente um conjunto de dados do formulário para envio com métodos como fetch() ou XMLHttpRequest (AJAX).

Qual a grande vantagem?
-------------------------
É a maneira mais fácil de enviar arquivos (como imagens ou documentos) através de chamadas fetch() em React ou qualquer aplicação JavaScript moderna, pois ele lida com o complexo formato multipart/form-data automaticamente.


Passo 2:
---------
Como Criar e Preencher o FormData:
------------------------------------
Existem duas formas principais de criar e preencher seu objeto FormData.


A. Criação a Partir de um Formulário Existente (Mais Comum)
----------------------------------------------------------------

Se você já tem um elemento <form> no seu HTML/JSX:

1. Selecione o elemento do formulário no DOM (por exemplo, usando document.querySelector('form')).
2. Passe a referência desse elemento diretamente ao construtor FormData.

Exemplo (JS):*/

const formularioElemento = document.getElementById('meuFormulario');
// O FormData vai AUTOMATICAMENTE coletar todos os campos (com atributo 'name')
// e seus respectivos valores presentes no formulário no momento da criação.
const formData = new FormData(formularioElemento);

/*

B. Criação Vazia e Adição Manual
--------------------------------------
Se você não tem um formulário HTML ou quer adicionar dados de forma programática:

1. Crie um objeto FormData vazio.
2. Use o método .append(chave, valor) para adicionar os pares de dados.

Exemplo:(JS) */

const formData = new FormData();

// Adicionando campos de texto simples
formData.append('nomeCompleto', 'Maria da Silva');
formData.append('email', 'maria@exemplo.com');

// Para adicionar um arquivo (por exemplo, de um <input type="file">)
const arquivo = fileInputRef.current.files[0]; // Referência ao arquivo
formData.append('fotoPerfil', arquivo, 'foto_maria.jpg'); // O terceiro argumento (opcional) é o nome do arquivo

/*
Passo 3:
-----------
Enviando o FormData (Onde o React/JavaScript Entra)
----------------------------------------------------

Este é o ponto crucial. O objeto FormData é ideal para ser usado como o corpo (body) de uma requisição fetch().

Quando você passa um objeto FormData como corpo da requisição, o navegador se encarrega de:

* Definir automaticamente o cabeçalho Content-Type como multipart/form-data. Você não precisa defini-lo manualmente! (Isso é um erro comum.)

* Serializar (empacotar) os dados e arquivos corretamente.

Exemplo de Envio com fetch(): */

// 'formData' é o objeto criado no passo 2
fetch('https://api.meuservidor.com/upload', {
  method: 'POST',
  // Não inclua o 'Content-Type' aqui! O navegador faz isso.
  body: formData, // Passamos o objeto FormData diretamente.
})
  .then((response) => response.json())
  .then((data) => console.log('Sucesso:', data))
  .catch((error) => console.error('Erro:', error));

/*
🔑 Resumo dos Principais Métodos
O objeto FormData possui alguns métodos úteis para manipulação:

Método | Descrição	| Exemplo
a) .append(name, value, filename)	
Adiciona um novo par chave/valor. Se a chave já existir, adiciona o novo valor sem sobrescrever (útil para checkboxes com o mesmo name).	
Ex. formData.append('produto', 'Geladeira');

b) .set(name, value, filename)	
Define ou substitui o valor de uma chave. Se a chave já existir, sobrescreve o valor anterior.	
Ex. formData.set('quantidade', '3');

c) .get(name)
Retorna o primeiro valor associado a uma chave específica.	
formData.get('produto'); // Retorna 'Geladeira'

d) .delete(name)
Remove um par chave/valor (ou todos os pares associados à chave) do objeto.	
Ex. formData.delete('produto'); */

/*

2) Blob()
--------------------------------------
--------------------------------------

O método blob() é um método da API Fetch e XMLHttpRequest (usados para fazer requisições HTTP em JavaScript/React) que permite processar o corpo de uma resposta de rede como um objeto binário bruto, ou seja, um Blob.Como seu instrutor, vou detalhar o que é e como funciona o método blob().

Entendendo o Método blob()
--------------------------------------
O método blob() é um dos vários métodos que você pode usar em um objeto Response (o retorno de uma requisição fetch()) para extrair seu corpo.


Passo 1: 
-------------
O Que é um Blob?

O termo Blob significa Binary Large Object (Objeto Binário Grande). 
Na web, um Blob é um tipo de objeto que representa dados brutos e imutáveis.

* Dados Binários: Eles não são interpretados como texto (como JSON ou String). Isso é ideal para lidar com arquivos como imagens, vídeos, áudios ou qualquer tipo de dado que não seja texto simples.

* Imutável: Uma vez que um Blob é criado, seu conteúdo não pode ser alterado.

* Em Resumo: Pense no Blob como um "recipiente" de bytes de dados com um tipo MIME especificado (ex: image/png, application/pdf).


Passo 2: 
-------------
A Função do Método response.blob()

O método blob() é chamado no objeto Response retornado por uma requisição fetch().

1. Assíncrono: Ele é um método assíncrono e, portanto, retorna uma Promise.

2. Processamento: Quando resolvido, a Promise entrega o corpo da resposta HTTP como um objeto Blob.

3.Uso Principal: Este método é a forma mais comum de baixar dados de arquivos (como uma imagem ou PDF) de um servidor via JavaScript e depois manipular esses dados no lado do cliente.


Passo 3: 
-------------
Exemplo Prático de Uso em JavaScript

O principal uso do blob() é em conjunto com a criação de um URL de Objeto (URL.createObjectURL()) para que o navegador possa renderizar ou baixar o arquivo.

Imagine que você está baixando uma imagem do servidor:JavaScript */

fetch('https://api.meuservidor.com/imagem/perfil.png')
  .then((response) => {
    // 1. O método .blob() é chamado no objeto Response.
    // Ele lê o corpo da resposta como dados binários.
    return response.blob();
  })
  .then((imageBlob) => {
    // 'imageBlob' é o objeto Blob (dados brutos da imagem)
    console.log('Tipo MIME:', imageBlob.type); // Ex: 'image/png'

    // 2. Criamos um URL temporário a partir do Blob.
    // Este URL pode ser usado pelo navegador.
    const imageObjectURL = URL.createObjectURL(imageBlob);

    // 3. Usamos o URL para exibir a imagem no DOM
    const imageElement = document.getElementById('imagemPerfil');
    imageElement.src = imageObjectURL;

    // Opcional: Liberar o recurso quando não for mais necessário
    // URL.revokeObjectURL(imageObjectURL);
  })
  .catch((error) => {
    console.error('Houve um erro no download do arquivo:', error);
  });

/*
Outros Métodos de Leitura de Corpo
--------------------------------------

É importante notar que o blob() é apenas uma das formas de ler o corpo da resposta. 
A escolha do método depende do tipo de dado que o servidor está enviando:

Método | Retorna | Quando Usar 

a) response.json()
-----------------------
Uma Promise que resolve em um objeto JavaScript;
Para dados estruturados (APIs REST).

b)response.text()
---------------------
Uma Promise que resolve em uma String;
Para dados de texto simples (HTML, XML).

c)response.blob()
--------------------
Uma Promise que resolve em um objeto Blob.
Para dados binários (imagens, vídeos, PDFs).

d)response.arrayBuffer()
-----------------------------
Uma Promise que resolve em um ArrayBuffer.
Para operações de baixo nível com dados binários (WebAssembly).

Em resumo: Use response.blob() sempre que a resposta do servidor for um arquivo ou dado binário que você precisa manipular no navegador.



3) Diferenças entre a utilização dos métodos FormData() e Blob()
-----------------------------------------------------------------
-----------------------------------------------------------------

O objeto FormData é o método mais comum e recomendado para enviar imagens e outros arquivos, especialmente quando há outros campos de formulário (texto, números, etc.) sendo enviados na mesma requisição.

1. Como Funciona
O FormData empacota os dados no formato multipart/form-data. Este formato é o padrão que os servidores esperam quando estão lidando com uploads de arquivos misturados com dados de formulário.

2. Uso Principal
Upload de Formulário Completo: Você precisa enviar uma imagem junto com o nome do usuário, descrição da foto, tags, etc.

Facilidade: É a forma mais fácil de integrar com um input de arquivo HTML (ex: <input type="file" name="foto">), pois ele imita o envio tradicional de um formulário.

3. Implementação em React (Exemplo)
Você coleta a imagem do input (que é um objeto File, que herda de Blob) e a anexa ao FormData, juntamente com outros dados. */

// No handler do React:
const handleImageUpload = (file) => {
  const formData = new FormData();

  // 1. Adiciona a imagem. O 'imagemFile' é o nome do campo esperado pelo seu backend.
  formData.append('imagemFile', file);

  // 2. Adiciona dados de texto/metadata (se houver)
  formData.append('descricao', 'Minha nova foto de perfil');

  fetch('https://api.upload.com/postagem', {
    method: 'POST',
    // O navegador define o Content-Type: multipart/form-data automaticamente
    body: formData,
  });
  // ... (tratamento da resposta)
};

// Conclusão do FormData: É o "canivete suíço" para uploads, perfeito para lidar com uploads de arquivos acompanhados de metadados.

/*
Blob: O Pacote Binário Puro
O objeto Blob (ou seu "parente" File) representa os dados binários da imagem. Usar um Blob diretamente para um POST é um caso de uso mais específico.

1. Como Funciona
Você envia o objeto Blob como o corpo da requisição, definindo o cabeçalho Content-Type manualmente para refletir o tipo do arquivo (ex: image/jpeg). O corpo da requisição será apenas os bytes brutos da imagem, sem nenhum wrapper adicional de formulário.

2. Uso Principal
Upload Binário Puro: O servidor espera apenas o arquivo binário em si, sem campos de formulário. Isso é comum em endpoints de serviços que são puramente dedicados ao upload de um único arquivo, como alguns serviços de storage em nuvem (ex: AWS S3 pre-signed URLs).

Otimização: Pode ser marginalmente mais eficiente, pois evita a sobrecarga (overhead) do formato multipart/form-data.

3. Implementação em React (Exemplo)
Você coleta a imagem (o objeto File ou Blob) e o envia diretamente no body. */

// No handler do React:
const handleImageUpload = (fileBlob) => {
  // 'fileBlob' é um objeto File, que é um tipo específico de Blob

  fetch('https://api.upload.com/imagem-pura', {
    method: 'POST',
    // 1. Você DEVE definir o Content-Type manualmente para o tipo do arquivo
    headers: {
      'Content-Type': fileBlob.type, // Ex: 'image/png'
    },
    // 2. Envia o Blob puro no corpo
    body: fileBlob,
  });
  // ... (tratamento da resposta)
};

//Conclusão do Blob: É a forma de envio "direta ao ponto", ideal quando o endpoint da API foi projetado especificamente para receber apenas o conteúdo binário de um único arquivo.

/*

Tabela Comparativa: FormData vs. Blob
-----------------------------------------

FormData:
--------------- 
Formato de Envio: multipart/form-data;
Inclusão de Texto: Sim. Permite anexar dados como nome, descrição, id, etc.
Content-Type: Gerado Automaticamente pelo navegador.
Uso em API: Padrão para uploads em APIs REST (onde há formulário)
Recomendado: 95% dos casos de upload em aplicações React.

Blob (ou File):
---------------
Formato de Envio: Binário puro (depende do Content-Type);
Inclusão de Texto: Não. O corpo é apenas o arquivo.
Content-Type:Precisa ser definido Manualmente no cabeçalho.
Uso em API: Comum em serviços de Cloud Storage para upload puro.
Recomendado: Casos de uso muito específicos e de baixo nível.


Conclusão:
--------------
A maioria das aplicações React, use FormData porque ele lida com a complexidade do multipart/form-data e permite que você envie dados misturados (arquivo + texto) de forma robusta e simples.
*/
