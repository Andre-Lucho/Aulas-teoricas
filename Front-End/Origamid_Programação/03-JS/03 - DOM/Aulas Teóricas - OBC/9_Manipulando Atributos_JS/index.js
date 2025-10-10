//  Formas de Manipular Atributos

const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  // atribuindo um novo valor diretamente(atraves de DOM e + Evento 'click')
  // input.value = 'Olá, mundo!'
  // console.log(input.value)  
  
  // Ex. colocando uma condiçáo - aqui ternária
  // input.value = input.value == "" ? 'ola??' : ""

  // pegando um valor pre-definido que esta inserido da tag HTML
  // ~ metodo prompt do navegador()??
  // input.getAttribute('value')
  // console.log(input.getAttribute('value'))

  // atribuindo aqui
  input.value = input.getAttribute('data-something-else')
})


document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
  
  // seta o atributo diretamente
  // 1.= o que ja estava pre-definido => para o 2.= novo
  // input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digita algo...'
})

document.getElementById('disable').addEventListener('click', function () {
  // input.setAttribute('disabled', !input.disabled)
  // ou

  // let x = input.disabled
  // input.disabled = input.disabled == "" ? "true" : input.disabled.innerHTML = ""
  
  // ou
  input.disabled = input.disabled == "" ? "true" : !input.disabled
}) 





document.getElementById('data').addEventListener('click', function () {
  const data2 = input.dataset.somethingElse
  // prop .dataset => acessa o atributo data HTML como um OBJETO
  // entáo: .dataset.something === chave something de data

  console.log("O valor do atributo data-something-else é: " + data2)
  let x = input.dataset.somethingElse = 'Algum outro valor'
  console.log("O valor do atributo data-something-else agora é: " + x)
  let y = input.dataset.somethingElse = 'Algum valor'

  // cuidar => no HTML data-algo-algo | no JS: camelCase => data.somethingElse

// ou
// 
})

const data = document.querySelector('#input')
console.log(data.attributes['data-something-else'])
