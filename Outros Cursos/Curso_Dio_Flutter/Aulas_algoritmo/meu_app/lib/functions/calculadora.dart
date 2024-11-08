import 'package:meu_app/functions/utils.dart' as utils;

void main(List<String> arguments) {
  print("Bem vindo a calculadora DART!");

  var numero1 = utils.lerConsoleDouble("Digite o primeiro numero: ");

  var numero2 = utils.lerConsoleDouble("Digite o segundo numero: ");

  var operacao =
      utils.lerConsole("Informe a operacao matematica desejada (+, -, *, /): ");

  utils.calcular(operacao, numero1, numero2);
}
