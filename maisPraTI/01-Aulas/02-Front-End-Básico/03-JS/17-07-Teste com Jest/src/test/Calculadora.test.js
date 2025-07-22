const Calculadora = require('../Calculadora');

// agrupando um conjunto de testes:
describe('Teste da class Calculadora', () => {
  let calc;

  //antes de cada teste, setando uma nova class Calculadora:
  beforeEach(() => {
    calc = new Calculadora();
  });

  test('Deve somar 2 numeros', () => {
    expect(calc.somar(2, 3)).toBe(5);
    expect(calc.somar(-1, 1)).toBe(0);
  });

  test('Deve multiplicar 2 numeros', () => {
    expect(calc.multiplicar(2, 3)).toBe(6);
    expect(calc.multiplicar(-1, 2)).toBe(-2);
  });

  test('Deve dividir 2 numeros', () => {
    expect(calc.dividir(10, 2)).toBe(5);
    expect(calc.dividir(2, 0)).toBe(new Error());
  });
});
