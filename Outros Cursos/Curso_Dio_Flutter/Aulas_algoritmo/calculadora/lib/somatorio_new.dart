import 'dart:convert';
import 'dart:io';

void main(List<String> arguments) {
  print("Digite um numero ou 'S' para sair");

  var line = stdin.readLineSync(encoding: utf8);
  double acumulador = 0;

  while (line != "S") {
    var numero = double.parse(line ?? "");
    acumulador = acumulador + numero;

    print("Digite um numero ou 'S' para sair");
    line = stdin.readLineSync(encoding: utf8);
  }

  print(acumulador);

  // var resultado = 0;

  // for (var i = 0; i < quantidade; i++) {
  //   print("Informe o numero a ser somado");
  //   line = stdin.readLineSync(encoding: utf8);

  //   resultado = resultado + numero;
  //   print("$i - $resultado");
  // }
}
