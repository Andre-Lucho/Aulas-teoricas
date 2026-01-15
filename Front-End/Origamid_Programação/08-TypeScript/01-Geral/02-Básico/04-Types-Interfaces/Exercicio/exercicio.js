"use strict";
const apiUrl = 'https://api.origamid.dev/json/notebook.json';
const apiFetch = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    showDoom(data);
};
apiFetch();
const showDoom = (data) => {
    document.body.innerHTML += `
  <section style="color: #f6f6f6">

    <h2>${data.nome}</h2>
    <p>Preço: ${data.preco}</p>
    <p>Descricao: ${data.descricao}</p>
    <p>Garantia: ${data.garantia}</p>
    <p>Tem seguro: ${data.seguroAcidentes ? 'sim' : 'não'}</p>
    <div>
      <h3>Fabricente: ${data.empresaFabricante.nome}</h3>
      <p>País: ${data.empresaFabricante.pais}</p>
    </div>
        <div>
      <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      <p>País: ${data.empresaMontadora.pais}</p>
    </div>

  </section>
  `;
};
