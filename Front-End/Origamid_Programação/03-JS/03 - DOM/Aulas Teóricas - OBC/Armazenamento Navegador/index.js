// Usando o sessionStorage

// forma mais simples de armazerar os dados
// mantém salvo os dados enquanto a aba/janela estiver aberta
// Ex. Login ativo de um site apenas durante a sessao de uso

document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  //window.sessionStorage//
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é:\n" + info);
});

/* Usando o localStorage
-----------------------------------

localStorage -- > É um objeto window*/

localStorage.nome = "Andre";

console.log(localStorage.nome); // Andre

// antém salvo os dados mesmo qd a aba/janela for fechada
// até serem removidos = via codigo ou limpeza de dados (sem data de expiração)
// Ex. Login ativo de um site após fechar o navegador

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  //window.localStorage//
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const text = localStorage.getItem("text");
  alert("O texto salvo no local storage é:\n" + text);
});

// Usando cookies

// pequenos arq de texto - podem ter data de expiração
// *podem ser enviados ao servidor (requisições) - disponivel no Backend

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // formato string + concatenação
  // cookieName= value; expires= UTC_String_Date; path=/;
  // sem parenteses(NÂO é um metodo de objeto);

  const cookie = "info=" + input.value + ";";
  // mes 11 = 12 => começa a partir de '0'
  const expiration = "expires=" + new Date(2023, 11, 25) + ";";
  // no root => começo do site
  const path = "path=/;";

  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

// quando temos 2 inputs, os cookies sao armazenados como 2 dados distintos
// para pegar o dado de um expecifico, usar metodo de string

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 11, 25) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
