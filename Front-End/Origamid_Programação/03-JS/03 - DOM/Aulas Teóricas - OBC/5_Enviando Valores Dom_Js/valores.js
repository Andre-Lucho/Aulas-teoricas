function register(element) {
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  // .children.ID = faz referencia aos FILHOS dentro do nó PAI
  // aqui - valores(.value) de ID username, password e passwordConfirmation

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}