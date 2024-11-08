import 'package:somatorio/utils.dart' as utils;

void main(List<String> arguments) {
  var line = utils.lerConsole("Digite um numero ou 'S' para sair");
  List<double> numDigitados = [];

  while (line != "S") {
    numDigitados.add(double.parse(line));
    var acumulator = utils.somaLista(numDigitados);

    line = utils.lerConsole("Digite um numero ou 'S' para sair");
  }

  print(utils.somaLista(numDigitados));
}
