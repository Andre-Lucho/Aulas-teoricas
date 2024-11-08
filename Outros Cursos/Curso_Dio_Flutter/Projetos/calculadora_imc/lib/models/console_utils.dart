import 'dart:convert';
import 'dart:io';

class ConsoleUtils {
  static String lerConsole() {
    return stdin.readLineSync(encoding: utf8) ?? "";
  }

  static String lerConsoleTexto(texto) {
    print(texto);
    return lerConsole();
  }

  static double lerConsoleNumeros() {
    var numero = lerConsole();
    return double.parse(numero);
  }

  static double lerConsoleNumerosTexto(texto) {
    print(texto);
    var numero = lerConsole();
    return double.parse(numero);
  }
}
