function cepFetch(url) {
  const cep = fetch(url);

  cep
    .then((r) => r.json()) // aqui, transformando em objeto JS
    .then((body) => {
      const conteudoCep = document.querySelector('.conteudoCep');
      conteudoCep.innerHTML = `<br>${body.cep}</br>${body.logradouro} - ${body.bairro} - ${body.uf}</br>${body.localidade}`;
    });
}

cepFetch('https://viacep.com.br/ws/90470450/json/');

module.exports = cepFetch;
