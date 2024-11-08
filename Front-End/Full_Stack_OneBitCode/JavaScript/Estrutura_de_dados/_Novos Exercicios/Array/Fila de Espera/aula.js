//         0        1      2
let fila = ["aaa", "bbb", "ccc"];

// function receberPrompt(texto) {
//   let opcao = prompt(texto);
//   return opcao;
// }

// function darAlert (texto) {
//   let opcao = alert(texto)
//   return opcao
// }

// //         FUNCAO
// function exibirMenu() {
//     const opcao = receberPrompt("\nBem Vindo ao Sitema para Gerenciamento da Fila de Espera! " +
//         "\n\nEscolha uma das opcoes abaixo: " +
//         "\n\n01 - Cadastrar Novo Paciente em espera " +
//         "\n02 - Listar Pacientes em espera " +
//         "\n03 - Excluir um Paciente da fila " +
//         "\n04 - Passar um Paciente em espera para frente na fila " +
//         "\n05 - Passar um Paciente em espera para tras na fila " +
//         "\n06 - Sair");
//     return opcao

//     // NÃO ESTÁ RETORNANDO a var opcao
// }
// const variavel = exibirMenu();
// console.log(variavel);

//                           Variável
function cadastrarPacientes(funcao) {
  let novoPaciente = prompt(
    "\nCadastro de Novo Paciente\n" +
      "Digite o nome do próximo paciente em espera: "
  );

  // @ts-ignore
  fila.push(novoPaciente);
  alert(fila);

  let confirmation = confirm(
    "Gostaria de adicionar mais 1 paciente a fila de espera?"
  );

  if (confirmation) {
    cadastrarPacientes();
  }
  // pq esta dando o numero de alerts  = a qt de elementos eu tenho na fila?

}

// cadastrarPacientes();

// cadastrarPacientes(exibirMenu())

function listarPacientes() {
  alert(fila);
  let confirmation = confirm("Gostaria de exibir novamente?");

  if (confirmation) {
    listarPacientes();
  }
}

function excluirPaciente() {
  let name = "";
  let del = false;
  let indice = -1;

  do {
    del = confirm(
      "Gostaria de excluir algum paciente da fila de espera?"
    );

    if (del) {
      // @ts-ignore
      name = prompt("Digite o nome do paciente a ser excluído: ");

      if (name) {
        indice = fila.indexOf(name);
        //                         posição: -1  (Não existe no array)
        if (indice) {
          fila.splice(indice, 1);
        } else {
          alert("Paciente não encontrado! Digite o nome novamente.");
        }
      }
    }
  } while (del);

  return fila;
}

function pacienteFrente() {}

function pacientetras() {}
