// import 'dart:convert';
// import 'dart:io';

// // import 'package:meu_app/meu_app.dart' as meu_app;

// void main(List<String> arguments) {
//   // var a = [10, 20, 30];
//   // print(a.where((x) => x > 10));

//   // var map = {"nome": "Andre", "numero": 1, "tipo": true};
//   // print(map);

//   print("Informe a primeira nota: ");
//   var line = stdin.readLineSync(encoding: utf8);
//   var prova1 = int.parse(line ?? "0");
//   print(line);

//   print("Informe a segunda nota: ");
//   line = stdin.readLineSync(encoding: utf8);
//   var prova2 = int.parse(line ?? "0");
//   print(line);

//   var media = (prova1 + prova2) / 2;

//   if (media >= 7) {
//     print("O aluno foi aprovado com a nota $media");
//   } else if (media >= 5) {
//     print("O aluno foi reprovadodo com a nota $media");
//   } else {
//     print("O aluno foi reprovadodo com a nota $media");
//   }
// }

import 'package:meu_app/functions/utils.dart' as utils;

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
