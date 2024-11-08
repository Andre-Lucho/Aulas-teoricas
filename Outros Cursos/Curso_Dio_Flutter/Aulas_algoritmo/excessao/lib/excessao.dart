import 'package:excessao/exception/nome_invalido_exception.dart';
import 'package:excessao/models/aluno.dart';
import 'package:excessao/models/console_utils.dart';

void executar() {
  print("BEM VINDO AO SISTEMA DE NOTAS");

  // var console = ConsoleUtils();
  // console.lerConsoleTexto("DIGITE O NOME DO ESTUDANTE: ");
  var nome = ConsoleUtils.lerConsoleTexto("DIGITE O NOME DO ESTUDANTE: ");

  try {
    if (nome.trim() == "") {
      throw NomeInvalido();
    }
  } on NomeInvalido {
    nome = "Nome padrao";
  } finally {
    //print("Nome padrao");
  }

  var aluno = Aluno(nome);

  // = double nota = 0 ou nulo
  double? nota;

  do {
    nota = ConsoleUtils.lerDoubleTextocomSaida(
        "Digite a nota ou s para sair", "s");
    if (nota != null) {
      aluno.adicionarNota(nota);
    }
  } while (nota != null);

  print("Notas para o Aluno: ${aluno.getNome()}");
  print("As notas digitadas foram: ${aluno.getNotas()}");
  print("A media do aluno foi: ${aluno.retornaMedia()}");
  if (aluno.aprovacao(7)) {
    print("O Aluno: ${aluno.getNome()} está aprovado");
  } else {
    print("O Aluno: ${aluno.getNome()} está reprovado");
  }
}
