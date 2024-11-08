import 'package:meu_app/functions/utils.dart' as utils;

void main(List<String> arguments) {
  var line = utils.lerConsole("Digite um numero ou 'S' para sair");
  List<double> numDigitados = [];

  while (line != "S") {
    numDigitados.add(double.parse(line));
    var acumulador = utils.somaLista(numDigitados);

    line = utils.lerConsole("Digite um numero ou 'S' para sair");
  }

  print(utils.somaLista(numDigitados));

  // var resultado = 0;

  // for (var i = 0; i < quantidade; i++) {
  //   print("Informe o numero a ser somado");
  //   line = stdin.readLineSync(encoding: utf8);

  //   resultado = resultado + numero;
  //   print("$i - $resultado");
  // }
}
