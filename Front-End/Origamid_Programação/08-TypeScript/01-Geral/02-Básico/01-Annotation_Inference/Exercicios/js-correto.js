const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;

function calcularGanho(value) {
  const valor = Number(value);
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${valor + 100 - valor * 0.2}`;
  console.log('ocorreu');
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', input.value);
  calcularGanho(value);
}
calcularGanho(total);

input.addEventListener('keyup', totalMudou);
