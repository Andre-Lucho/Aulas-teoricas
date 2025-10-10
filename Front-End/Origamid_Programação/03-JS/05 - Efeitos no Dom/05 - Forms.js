/*

Forms
-----------------------------------
-----------------------------------

É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.

<form name="contato" id="contato">
<label for="nome">Nome</label>
<input type="text" name="nome" id="nome">
<label for="email">Email</label>
<input type="email" name="email" id="email">
<label for="mensagem">Mensagem</label>
<textarea name="mensagem" id="mensagem"></textarea>
</form>
*/

// console.log(document.forms); // lista com os formulários como um Array-like do tipo HTMLCollection
// console.log(document.forms[0]); // lista o formulário na posiçao 0
// console.log(document.forms.contato); // form com o seu NAME = contato
// console.log(contato); // ou apenas pelo name do formulário

/* 
ou ainda, posso selecionar via querySelector
*/

// const formulario = document.querySelector("#contato");

// console.log(formulario);
/*

*/
//
// console.log(document.forms.contato.elements);
/* 
ou ainda, diretamente pelo nome do formulário
// */
// console.log(contato.elements);
// mostram apenas os elementos do formulário (inputs)(Array-like)
//
// console.log(contato.elements.mensagem);
// puxando pelo NAME ou ID

// console.log(document.forms.contato.elements);
// console.log(document.forms.contato.elements[0].value); // valor que o usuário add no primeiro input

/*

Values
-----------------------------------

A propriedade value retorna o valor do elemento no formulário.
Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar.
'change' dispara quando houver mudanças. */

const form = document.getElementById("contato");
const text = document.querySelector(".texto");

// function handleKeyUp(event) {
//   // console.log(event.target.value);
//   text.innerHTML = event.target.value;
// }
// form.addEventListener("keyup", handleKeyUp);
// keyup só funciona quando os valores são add via teclado
/*
IMPORTANTE
--------------------
Não funciona via reconhecimento de voz, por exemplo --> usar 'change' ou o Observer 

/*

Validação (Nativa Browser)
-----------------------------------
O método 'checkValidity' verifica se um input com o ATRIBUTO 'required', é válido ou não. 
A propriedade 'validationMessage' possui a mensagem padrão de erro do browser. 
É possível modicar a mensagem padrão com 'setCustomValidity'('')

<input type="email" name="email" id="email" required>
<span class="erro"></span> */

// function handleValidation(event) {
//   const target = event.target;
//   const nomeinvalido = contato.nome;
//   const emailinvalido = contato.email;
//   const valorNomeInvalido = target.value;
//   if (!target.checkValidity()) {
//     console.log(target.checkValidity());
//     target.classList.add("invalid");
//     nomeinvalido.setCustomValidity("Preencha com o seu nome completo");
//     emailinvalido.setCustomValidity(
//       "Preencha o endereço de email corretamente"
//     );
//     target.nextElementSibling.innerText = target.validationMessage;
//     // if (!valorNomeInvalido.includes(" ")) {
//     //   target.nextElementSibling.innerText = target.validationMessage;
//     // não funcionou --> rever
//   } else {
//     target.classList.remove("invalid");
//   }
// }

// form.addEventListener("change", handleValidation);

/*
Select
-----------------------------------

<select name="cores" id="cores">
<option value="black">Preto</option>
<option value="white">Branco</option>
<option value="blue">Azul</option>
</select>
<input type="color"> */

// const backcolor = document.querySelector(".cores");
// function handleChange2(event) {
//   document.body.style.backgroundColor = event.target.value;
// }
// backcolor.addEventListener("change", handleChange2);

/*

Diferentes Inputs
-----------------------------------

<input type="color">
<input type="date">
<input type="number">
<input type="range">
<input type="password"> // esconde na tela; porém, mostra no console


*/

const inputTypes = document.querySelector(".inputTypes");
// function handleChange3(event) {
//   console.log(event.target.value);
//   document.body.style.backgroundColor = event.target.value;
// }
// inputTypes.addEventListener("change", handleChange3);

/*
Checkbox
-----------------------------------

Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.
<label for="identidade">Possui identidade?</label>
<input type="checkbox" value="identidade" id="identidade">
<label for="casado">Casado?</label>
<input type="checkbox" value="casado" id="casado"> */

// function handleChange3(event) {
//   // console.log(event.target.checked);
//   console.log(event.target.value); // traz o valor contido no atributo value

//   // or

//   // event.target.checked ? console.log(event.target.value) : null;
// }

// inputTypes.addEventListener("change", handleChange3);

/*

Radio
-----------------------------------

A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. 
Radio é agrupado pelo atributo name.
<input type="radio" id="guitarra" value="guitarra" name="instrumento" />
<label for="guitarra">Guitarra</label>
<input type="radio" id="violao" value="violao" name="instrumento" />
<label for="violao">Violão</label>
<input type="radio" id="baixo" value="baixo" name="instrumento" />
<label for="baixo">Baixo</label> */

// function handleChange4(event) {
//   if (event.target.checked) console.log(event.target.value);
// }

/*

Pegando todos os valores
-----------------------------------

Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.
<form name="contato" id="contato">
<label for="nome">Nome</label>
<input type="text" name="nome" id="nome">
<label for="email">Email</label>
<input type="email" name="email" id="email">
<label for="mensagem">Mensagem</label>
<textarea name="mensagem" id="mensagem"></textarea>
</form> */

const dados = {};

function handleChange5(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
  return dados;
}
form.addEventListener("change", handleChange5);

console.log(dados);

/*
dados[event.target.name] -- não é uma Array
-----------------------------------

No JavaScript, existem duas maneiras de acessar as propriedades de um objeto: 
notação de ponto (.) e 
notação de colchetes ([]).

1) A notação de ponto é usada quando você sabe o nome da propriedade.

2) A notação de colchetes é usada quando o nome da propriedade é DINÂMICO, ou seja, é determinado EM TEMPO DE EXECUÇÃO.

No seu código, event.target.name é o nome da propriedade que está sendo definida dinamicamente.
==> dados[event.target.name] == dados.(event.target.name)
(o nome da 1° propriedade de 'dados' é 'event.target.name')

Portanto, a notação de colchetes é usada. 
A função handleChange5 está adicionando uma nova propriedade ao objeto 'dados' cujo nome é [event.target.name] e cujo valor é  = event.target.value.*/
