const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const itensUl = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');
const contadorDiv = document.querySelector('.contador-div');
const contadorTotal = document.querySelector('.contador-total');
const filtroStatus = document.getElementById('filtro-status');
const ordenar = document.getElementById('ordenar');

let listaItens = [];
let filtroAtual = 'todos';

function salvarDados() {
  localStorage.setItem('listaCompras', JSON.stringify(listaItens));
}

function togglePurchased(index) {
  listaItens[index].comprado = !listaItens[index].comprado;
}

function atualizarFiltro(status) {
  filtroAtual = status;
  renderizarLista();
  // re-renderizo com o filtro atualizado para renderizar os itens da opção escolhida no filtro
}

function renderizarLista() {
  itensUl.innerHTML = '';
  let itensFiltrados = [];

  if (filtroAtual === 'pendentes') {
    itensFiltrados = listaItens.filter((item) => !item.comprado);
  } else if (filtroAtual === 'comprados') {
    itensFiltrados = listaItens.filter((item) => item.comprado);
  } else {
    itensFiltrados = listaItens;
  }

  itensFiltrados.forEach((item, index) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'confirmar';

    if (!item.comprado) {
      checkbox.classList.add('pendente');
    } else {
      checkbox.classList.add('comprado');
    }

    checkbox.checked = item.comprado;
    checkbox.title = 'Confirmar?';
    checkbox.addEventListener('click', () => {
      togglePurchased(index);
      salvarDados();
      atualizarFiltro(filtroAtual);
    });

    const span = document.createElement('span');
    span.textContent = item.input;
    span.classList.add('item-text');

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.title = 'Remover Item';

    btnRemover.addEventListener('click', () => {
      removerItem(index);
      salvarDados();
      atualizarFiltro(filtroAtual);
      contarItens();
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
}

function contarItens() {
  //   // itens.forEach((item) => {
  //   //   counter++;
  //   // });
  const totalItens = listaItens.length;
  contadorTotal.textContent = `${totalItens} `;
  //   // counter = 0;
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
filtroStatus.addEventListener('change', () => {
  const status = filtroStatus.value;
  atualizarFiltro(status);
});
/* change --> quando a opção muda
não iteramos, pois a classe seria colocada e tirada de todas rapidamente, 
restanto apenas o resultado da última iteração*/

// Evento Principal
formAdicionar.addEventListener('submit', (event) => {
  event.preventDefault(); // evita o refresh da página
  const novoItem = inputItem.value.trim(); // pega valor sem espaços em branco
  if (!novoItem) return;

  listaItens.push({ input: novoItem, comprado: false });
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
    atualizarFiltro(filtroAtual);
    contarItens();
  }
});

// Funcionalidades:

// 1) Voltar a deixar selecionado a opção 'Todos' qd limpo a Lista
// 2) Permita ordenar alfabeticamente
// 3) Modificar para mostrar o número de ítens totais, pendentes e comprados
