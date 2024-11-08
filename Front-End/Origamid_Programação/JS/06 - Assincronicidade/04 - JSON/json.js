/*
JSON
-----------------------------------

JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. 
As ASPAS DUPLAS são obrigatórias, tanto na chave quanto no valor quando este for uma string.(exceto boolean e number)
O formato JSON pode ser interpretado em diversas linguagens.

{
"id": 1,
"nome": "Andre",
"email": "andre@origamid.com"
} */

/*
Valores
-----------------------------------

Os valores podem ser números, strings, boolean, arrays, objetos e null.

{
"id": 1,
"faculdade": true,
"pertences": [
  "lapis",
  "caneta",
  "caderno"
],
"endereco": {
  "cidade": "Rio de Janeiro",
  "pais": "Brasil"
  },
"casado": null
} */

/*

Arrays e Objetos
-----------------------------------

É comum possuirmos array's com objetos em cada valor da array.
Cuidado para NÃO colocar VÍRGULA no ÚLTIMO ÍTEM do objeto ou array.

[
{
"id": 1,
"aula": "JavaScript",
"tempo": "25min"
},
{
"id": 2,
"aula": "HTML",
"tempo": "15min"
},
{
"id": 3,
"aula": "CSS",
"tempo": "10min"
}
]

*/

const exemplo = fetch("./dados.json");
exemplo
  .then((r) => r.json())
  .then((dados) => {
    console.log(dados); // 2
    dados.forEach((mateia) => {
      console.log(mateia.aula); // JavaScript, HTML
    });
  });

/*

JSON.parse() e JSON.stringify()
-----------------------------------

JSON.parse() irá transformar um texto JSON em um objeto JavaScript. 
JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON. */

const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo":"25min"}';
const textoOBJ = console.log(JSON.parse(textoJSON));

const enderecoOBJ = {
  cidade: "Rio de Janeiro",
  rua: "Ali Perto",
  pais: "Brasil",
  numero: 50,
};
const enderecoJSON = console.log(JSON.stringify(enderecoOBJ));

/*OBS.:
------------
o método do response(r =>
r.json()) --> é o mesmo metodo de JSON.parse */

/*
Exemplo Real
-----------------------------------

Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. 
E retornar essa string como um objeto. */

const configuracoes = {
  player: "Google API",
  tempo: 25.5,
  aula: "2.1 JavaScript",
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
console.log(localStorage); //conf armazenadas como arq JSON no localstorage
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
console.log(pegarConfiguracoes); // formato Objeto JS
