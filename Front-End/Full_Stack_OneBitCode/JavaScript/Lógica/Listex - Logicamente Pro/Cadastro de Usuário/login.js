executarLogin()

function cadastro(){
  do{
    const usuario = prompt("Insira um nome de usuario: ")
    const senha = parseFloat(prompt("Insira uma senha para o usuario: "))
    
    if(usuario && senha){
      alert("Cadsatro realizado com sucesso!" +
        "\nDados Cadastrados:" + "\nUsuario: " + usuario + "\nSenha: " + senha
      )
    return {usuario, senha}
    }else {
      alert("Cadastro não realizado. Insira os dados novamente...")
    }
  }while(!usuario && !senha)
}

function login(){
  do{
    const usuarioLogin = prompt("Insira seu nome de usuario: ")
    const senhaLogin = parseFloat(prompt("Insira sua senha de usuario: "))
    
    if(usuarioLogin && senhaLogin){
    return {usuarioLogin, senhaLogin}
  } else{
    alert("Login nao preenchido corretamente. Insira os dados novamente...")
  }
  } while(!usuarioLogin && !senhaLogin)
}


function executarLogin(){
  let dadosCadastro = ""
  let fazerLogin = ""
  
  dadosCadastro = cadastro()
  fazerLogin = login()
  
  do {
    if(dadosCadastro.usuario === fazerLogin.usuarioLogin 
      && dadosCadastro.senha === fazerLogin.senhaLogin
      ) {
      alert("BEM-VINDO À ÁREA RESTRITA")
      break;
    } else {
      alert("Insira novamente seus dados de acesso...")
      fazerLogin = login()
    }
} while (true)
}

// OU ASSIM

//    while (true){
  //     if(dadosCadastro.usuario === fazerLogin.usuarioLogin
  //       && dadosCadastro.senha === fazerLogin.senhaLogin
  //       ){
  //       alert("BEM-VINDO À ÁREA RESTRITA")
  //       break;
  //     } else {
  //         alert("Insira novamente seus dados de acesso...")
  //         fazerLogin = login()
  //      }    
  //   } 
  // }    