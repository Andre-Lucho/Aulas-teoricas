import 'dart:convert';
import 'dart:io';

void main(List<String> arguments) {
  print("Bem vindo a calculadora DART!");
  print("Digite o primeiro numero: ");

  var line = stdin.readLineSync(encoding: utf8);
  var numero1 = double.parse(line ?? "0");

  print("Digite o segundo numero: ");

  line = stdin.readLineSync(encoding: utf8);
  var numero2 = double.parse(line ?? "0");

  print("Informe a operacao matematica desejada (+, -, *, /): ");
  line = stdin.readLineSync(encoding: utf8);
  var operacao = line ?? "";

  double resultado = 0;

  switch (operacao) {
    case "+":
      resultado = soma(numero1, numero2);
      break;
    case "-":
      resultado = subtracao(numero1, numero2);
      break;
    case "*":
      resultado = multipiclacao(numero1, numero2);
      break;
    case "/":
      resultado = divisao(numero1, numero2);
      break;
    default:
      print("Operacao invalida");
      exit(0);
  }

  print("Operacao escolhida: $operacao");
  print("O resultado da operacao e: $resultado");
}

double soma(double numero1, double numero2) {
  return numero1 + numero2;
}

double subtracao(double numero1, double numero2) {
  return numero1 - numero2;
}

double multipiclacao(double numero1, double numero2) {
  return numero1 * numero2;
}

double divisao(double numero1, double numero2) {
  return numero1 / numero2;
}
