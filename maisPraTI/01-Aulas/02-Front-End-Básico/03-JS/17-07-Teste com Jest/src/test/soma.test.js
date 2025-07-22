const soma = require('../soma');

test('Soma: 2 e 3 deve ser = 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('Soma: -1 e +1  deve ser = 0', () => {
  expect(soma(-1, 1)).toBe(0);
});
