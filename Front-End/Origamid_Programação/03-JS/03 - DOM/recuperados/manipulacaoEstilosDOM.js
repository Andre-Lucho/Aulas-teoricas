// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
  // document.body.style = acesso a todas as propriedades CSS da tag 'body'
  // console.log(document.body.style)
  
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  // classList = lista de classes disponiveis - que foram setadas
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')

  // os estilos das 2 primeiras funcoes sao add inline na tag body do html;
  // Dessa forma, as prop CSS do SwitchTheme nao serao aplicadas, pois inline tem prioridade
  // .toggle troca apenas o nome da classe( de: 'is-light' para: 'is-dark') 
  // que estavam setadas no arq CSS ou na <head> na tag <body>
  
  // (a classe ate e trocada no html, mas o style inline foi add e tem prioridade)
}

// Adicionando os eventos
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)