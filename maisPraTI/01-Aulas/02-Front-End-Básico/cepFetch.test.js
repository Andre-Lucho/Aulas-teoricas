const cep = require('../cepFetch');

test('cep deve fazer um apped de fetch de viaCep', () => {
  expect(cepFetch('https://viacep.com.br/ws/90470450/json/')).toBe(true);
});
