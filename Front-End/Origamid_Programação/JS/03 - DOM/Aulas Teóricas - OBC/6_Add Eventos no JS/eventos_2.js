
const button = document.getElementById('register-button')
const button2 = document.getElementById('remove')

button.addEventListener('click', register)
button2.addEventListener('click', event2Remove)


//event(evento) ou qquer outro = parâmetro que fica disponível, através do addEventListener
// aqui = todo o evento realisado pela função register fica disponivel atrelado a button

function register(event) {
  console.log(event)

  const sectionElement = event.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}

// event2 aqui é opcional, pois a acao do evento click do botton2
// é remover os eventos de botton!
// caso eu quisesse pegar info das tags de <section>, dai ele teria sentido
function event2Remove(event2) {
  button.removeEventListener('click', register)
  console.log(event2)


  alert("Event Removed")
}


// const button = document.getElementById('register-button')
// button.addEventListener('click', register)
// addEventListener:
// add os eventos à Tag HTML da const button - fica em idle
// (1,2)
// 1 = tipo de evento HTML
// 2 = Callback Function
// 2 = button.addEventListener('click', function( => {

// })
// )

// button.addEventListener("mouseover", function (ev) {
//   console.log(ev)
// })