
// OBTENDO ELEMENTOS HTML DOM

function show() {
  
  // OBTER VÁRIOS ELEMENTOS (HTMLCollection) = Array-Like

  // => Lista de Elementos dinâmicos - altera automaticamente todos os elementos
  // qd as propriedades CSS são alteradas ou, 
  // qd novas elementos são criados via JS DOM e append no HTML
  
  
  // A partir de um nome de TAG
  const liElements = document.getElementsByTagName('li')
  // console.log(liElements)


  // A partir de uma CLASSE
  const contactInputs = document.getElementsByClassName('contact-input')
  // console.log(contactInputs)
  
  // **tambem posso selecionar +1 classe => deixando um espaco entre o nome das 2 classes dentro do ()

// retorna como um ARRAY:
// ex.: console.log(liElements[3]) = apenas na posicao 3
// ex.: console.log(liElements.lenght) = tamanho do "array"



  // OBTER VÁRIOS ELEMENTOS (NodeList) = Array-Like

  // => Lista de Elementos estáticos
  // não altera dinamicamente qd, por exemplo, as propriedades CSS são alteradas
  // porem, possue mais métodos que o HTMLCollection

  // A partir do atributo NAME
  const contact2 = document.getElementsByName('contact2')
  // console.log(contact2)
  

  // A partir de uma QUERY = querySelectorAll
  // (semelhante aos seletores do CSS ~ .classe do CSS)
  // elemento label = dentro do li, dentro do ID = contact-list
  const contacts = document.querySelectorAll('#contact-list > li > input').value
  console.log(contacts)

  // ex.: console.log(contacts[3]) = apenas na posicao 3
  // = console.log(document.querySelectorAll('img[src^="img/imagem"]') 
  // seleciona todos os atributos img que comecem exatamente(^) pela src= img/imagem... 


  
  // OBTER UM ÚNICO ELEMENTO

  // A partir do seu ID
  const contactList = document.getElementById('contact1').value // id do elemento HTML(=valor)
  // console.log(contactList)


  // Através de uma QUERY 
  // O comportamento é igual ao do querySelectorAll(), 
  // porém selecionando o PRIMEIRO ELEMENTO que combinar com o seu seletor CSS 
  // Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.

  const firstContact = document.querySelector('#contact-list').textContent
  // console.log(firstContact)
  // .textContent = texto da tag <label>

  // outros exemplos (servem tambem para .querySelectorAll):

  // = document.querySelector('.animais_lista li:last-child')
  // seleciona o ultimo li(last-child) dentro da classe animais_lista
  
  // = document.querySelector('[href^="https://"]') 
  // seleciona o primeiro atributo href que comecem exatamente(^) com https://... 

  // ainda:
  // buscar dentro de firstContact
  // const navItem =  firstContact.querySelector('li')
  // seleciona a primeira li dentro de onde esta apontando a variavel firstContact
}


// Diferenças entre HTMLCollection e NodeList

// NodeList => número de métodos e propriedades é + completa:

// NodeList.length
// NodeList.item()
// NodeList.entries()
// NodeList.forEach()
// NodeList.keys()
// NodeList.values()
// https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList


// HTMLCollection => número de métodos e propriedades é limitado:
// HTMLCollection.length
// HTMLCollection.item()
// HTMLCollection.namedItem()
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection



// Transformando os Arrays-Like em  Array "puro"
//  (Posso ter todas os metodos do NodeList no HTMLColection):

// const abc = Array.from(NomeDaVariavel)