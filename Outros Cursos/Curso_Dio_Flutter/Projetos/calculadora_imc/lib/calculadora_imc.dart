import 'package:calculadora_imc/models/console_utils.dart';
import 'package:calculadora_imc/models/pessoa.dart';

void calcular() {
  print("BEM VINDO A CALCULADORA IMC EM DART");

  var nome = ConsoleUtils.lerConsoleTexto("Por Favor, Digite o seu nome: ");
  var peso = ConsoleUtils.lerConsoleNumerosTexto("Agora, digite o seu peso: ");
  var altura = ConsoleUtils.lerConsoleNumerosTexto("Digite sua altura: ");

  var usuario = Pessoa(nome, peso, altura);

  print("${usuario.getNome()}");
  print("${usuario.getPeso()}");
  print("${usuario.getAltura()}");
}
