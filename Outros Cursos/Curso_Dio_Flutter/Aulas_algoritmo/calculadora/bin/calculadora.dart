import 'dart:convert';
import 'dart:io';

void main(List<String> arguments) {
  print("Bem vindo a calculadora DART!");

  var numero1 = lerConsoleDouble("Digite o primeiro numero: ");

  var numero2 = lerConsoleDouble("Digite o segundo numero: ");

  var operacao =
      lerConsole("Informe a operacao matematica desejada (+, -, *, /): ");

  calcular(operacao, numero1, numero2);
}

void calcular(String operacao, double numero1, double numero2) {
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

double lerConsoleDouble(String texto) {
  //** primeira forma
  //  //var line = lerConsole(texto); Linha incorporada na debaixo =

  //  ** return double.parse(lerConsole(texto)); **

  //** segunda forma: corrigindo o problema dda digitacao nula pelo usuario

  var numero = double.tryParse(lerConsole(texto));
  if (numero == null) {
    print("Numero informado incorreto. Escolha alterada para 0!");
    return 0.0;
  } else {
    return numero;
  }
}

String lerConsole(String texto) {
  print(texto);
  var line = stdin.readLineSync(encoding: utf8);
  return line ?? "";
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
  if (numero2 == 0) {
    print("Operacao invalida: Divisao por 0");
    exit(0);
  } else {
    return numero1 / numero2;
  }
}
