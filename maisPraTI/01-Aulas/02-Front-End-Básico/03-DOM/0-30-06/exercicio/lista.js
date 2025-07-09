const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const itensUl = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');
const contadorDiv = document.querySelector('.contador-div');
const contadorTotal = document.querySelector('.contador-total');
const contadorPendente = document.querySelector('.contador-pendentes');
const contadorComprado = document.querySelector('.contador-comprados');
const filtroStatus = document.getElementById('filtro-status');
const ordenar = document.getElementById('ordenar');

let listaItens = [];
// let filtroAtual = 'todos';

function salvarDados() {
  localStorage.setItem('listaCompras', JSON.stringify(listaItens));
}

// function atualizarFiltro(status) {
//   filtroAtual = status;
//   renderizarLista();
//   // re-renderizo com o filtro atualizado para renderizar os itens da opção escolhida no filtro
// }

function renderizarLista() {
  itensUl.innerHTML = '';
  let itensFiltrados = [...listaItens];
  const status = filtroStatus.value;

  if (status === 'pending')
    itensFiltrados = listaItens.filter((item) => !item.purchased);
  if (status === 'purchased')
    itensFiltrados = listaItens.filter((item) => item.purchased);

  // let itensFiltrados = [];

  // if (filtroAtual === 'pending') {
  //   itensFiltrados = listaItens.filter((item) => !item.purchased);
  // } else if (filtroAtual === 'purchased') {
  //   itensFiltrados = listaItens.filter((item) => item.purchased);
  // } else {
  //   itensFiltrados = listaItens;
  // }

  const order = ordenar.value;
  if (order === 'alphabetical') {
    itensFiltrados.sort((a, b) => a.text.localeCompare(b.text));
  } else if (order === 'status') {
    itensFiltrados.sort((a, b) => a.purchased - b.purchased);
  }

  itensFiltrados.forEach((item, index) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'confirmar';

    // if (!item.comprado) {
    //   checkbox.classList.add('pending');
    // } else {
    //   checkbox.classList.add('purchased');
    // }

    checkbox.checked = item.purchased;
    checkbox.title = 'Confirmar?';
    checkbox.addEventListener('click', () => {
      listaItens[index].purchased = !listaItens[index].purchased;
      salvarDados();
      // atualizarFiltro(filtroAtual);
      contarItens();
      renderizarLista();
    });

    const span = document.createElement('span');
    span.textContent = item.input;
    span.classList.add('item-text');

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.title = 'Remover Item';

    btnRemover.addEventListener('click', () => {
      removerItem(index);
    });

    // aplicando os elem na tela
    div.append(checkbox, span);
    li.append(div, btnRemover);
    itensUl.append(li);
    // itensUl.appendChild(li);
  });
}

function removerItem(index) {
  listaItens.splice(index, 1);
  salvarDados();
  atualizarFiltro(filtroAtual);
  contarItens();
}

function contarItens() {
  contadorTotal.textContent = `Total: ${listaItens.length}`;
  contadorPendente.textContent = `Pendentes: ${
    listaItens.filter((item) => !item.purchased).length
  }`;
  contadorComprado.textContent = `Comprados: ${
    listaItens.filter((item) => item.purchased).length
  }`;
}

// EVENTOS

// Evento Refresh
window.addEventListener('DOMContentLoaded', () => {
  const dados = localStorage.getItem('listaCompras');
  if (dados) {
    listaItens = JSON.parse(dados);
    renderizarLista();
    contarItens();
  }
});

// Eventos de Filtro
filtroStatus.addEventListener('change', renderizarLista);

// filtroStatus.addEventListener('change', () => {
//   const status = filtroStatus.value;
//   atualizarFiltro(status);
// });
/* change --> quando a opção muda
não iteramos, pois a classe seria colocada e tirada de todas rapidamente, 
restanto apenas o resultado da última iteração*/

// Evento de Ordenação
ordenar.addEventListener('change', renderizarLista);

// Evento Principal
formAdicionar.addEventListener('submit', (event) => {
  event.preventDefault(); // evita o refresh da página
  const novoItem = inputItem.value.trim(); // pega valor sem espaços em branco
  if (!novoItem) return;

  listaItens.push({ input: novoItem, purchased: false });
  salvarDados();
  renderizarLista();
  contarItens();

  inputItem.value = '';
});

// Evento limpar dados
btnLimpar.addEventListener('click', () => {
  if (confirm('Deseja limpar toda a lista?')) {
    listaItens = [];
    salvarDados();
    renderizarLista();
    // atualizarFiltro(filtroAtual);
    contarItens();
  }
});

// Funcionalidades:
// 1) Voltar a deixar selecionado a opção 'Todos' qd limpo a Lista
// 2) Permita ordenar alfabeticamente
