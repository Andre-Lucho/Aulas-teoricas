import 'package:testes/testes.dart' as testes;
import 'package:test/test.dart';

void main() {
  // OS TEXTES COMENTADOS SAO SIMPLES = NAO ESTAO EM GRUPO.
  // OS EM GRUPO REPRESENTAM OS MESMOS DOS SIMPLES

  // test('Calculo com desconto em %', () {
  //   expect(testes.calcularDesconto(1000, 15, true), equals(850));
  // });

  // test('Calculo com o desconto direto', () {
  //   expect(testes.calcularDesconto(1000, 150, false), equals(850));
  // });

  group("Calculo valor do produto com desconto", () {
    var valuesToTest = {
      {'valor': 1000, 'desconto': 150, 'percentual': false}: 850,
      {'valor': 1000, 'desconto': 15, 'percentual': true}: 850,
    };
    valuesToTest.forEach((values, expected) {
      test(' Entrada: $values Esperado: $expected', () {
        expect(
            testes.calcularDesconto(
                double.parse(values["valor"].toString()),
                double.parse(values["desconto"].toString()),
                values["percentual"] == true),
            equals(expected));
      });
    });
  });

  // test('Calculo com o valor zerado com o desconto direto', () {
  //   expect(() => testes.calcularDesconto(0, 150, false),
  //       throwsA(TypeMatcher<ArgumentError>()));
  // });

  // test('Calculo com o desconto zerado', () {
  //   expect(() => testes.calcularDesconto(1000, 0, true),
  //       throwsA(TypeMatcher<ArgumentError>()));
  // });

  group(
      "Calculo valor do produto informando valores zerados; deve gerar erro: ",
      () {
    var valuesToTest = {
      {'valor': 0, 'desconto': 150, 'percentual': false},
      {'valor': 1000, 'desconto': 0, 'percentual': true},
    };
    for (var values in valuesToTest) {
      test(' Entrada: $values', () {
        expect(
            () => testes.calcularDesconto(
                double.parse(values["valor"].toString()),
                double.parse(values["desconto"].toString()),
                values["percentual"] == true),
            throwsA(TypeMatcher<ArgumentError>()));
      });
    }
  });
}
