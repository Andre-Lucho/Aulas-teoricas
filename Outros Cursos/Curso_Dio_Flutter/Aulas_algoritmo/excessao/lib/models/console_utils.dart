import 'dart:convert';
import 'dart:io';

class ConsoleUtils {
  //o STATIC retira a necessidade de instanciar = guardar em uma variavel - qd invocamos a classe

  static String lerConsole() {
    return stdin.readLineSync(encoding: utf8) ?? "";
    // SERA = OU O QUE O USUARIO DIGITOU OU VAZIO = if ternario
  }

  static String lerConsoleTexto(String texto) {
    print(texto);
    return lerConsole();
  }

  static double? lerDouble() {
    var value = lerConsole();
    try {
      return double.parse(value);
    } catch (e) {
      return null;
    }
  }

  static double? lerDoubleTexto(String texto) {
    print(texto);
    return lerDouble();
  }

  static double? lerDoubleTextocomSaida(String texto, String valor) {
    do {
      var value = lerConsoleTexto(texto);
      if (value == valor) {
        return null;
      }
      try {
        return double.parse(value);
      } catch (e) {
        print(texto);
      }
    } while (true);
  }
}
