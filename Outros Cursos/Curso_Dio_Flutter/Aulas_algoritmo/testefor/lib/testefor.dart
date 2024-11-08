import 'dart:convert';
import 'dart:io';

import 'package:calculadora/calculadora.dart' as calculadora;

void main(List<String> arguments) {
  print("Calculadora somatorio de numeros"
      "\nEssa Calculadora informa o total do somatorio dos numeros informados pelo usuario ");

  print("informe a quant de numeros a serem somados: ");
  var line = stdin.readLineSync(encoding: utf8);
  var quantidade = 0;
  quantidade = int.parse(line ?? "0");

  var resultado = 0;

  for (var i = 0; i < quantidade; i++) {
    print("Informe o numero a ser somado");
    line = stdin.readLineSync(encoding: utf8);
    var numero = int.parse(line ?? "0");

    resultado = resultado + numero;
    print("$i - $resultado");
  }
}
