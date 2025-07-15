const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');
const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  ' ',
];

// Evento para todas as teclas da calculadora:
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

// Evento para a tecla C :
document.getElementById('clear').addEventListener('click', function () {
  input.value = '';
  // .focus() => foca o cursor no elemento html
  input.focus();
});

// Evento para a tecla = :
document.getElementById('equal').addEventListener('click', calculate);

function calculate() {
  // serao executadas sempre...
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');

  // eval() => funciona como um console do navegador = executa o quer for passado
  // no caso aqui = vai fazer cálculos com o que digitarmos no input
  const result = eval(input.value);
  // caso o resultado seja valido, o funcao continua a execucao
  // caso nao, somente as 2 prim linhas sao executadas

  resultInput.value = result;
  resultInput.classList.remove('error');

  // como e mto rapido a execucao da funcao, com resultado valido, nao percebemos visualmente
  // mesmo exemplo do botao BACKSPACE => slice
}

// Evento que PREVINE que o usuario insira botoes do teclado
// que NAO sao as operacoes da calculadora:

// Evento 'keydown' = qd uma tecla do teclado é acionada
input.addEventListener('keydown', function (ev) {
  // pq previnir o evento padrão? pois keydown = inserir o valor da tecla pressionada....
  // quero que NÃO seje inserido!!
  ev.preventDefault();

  if (allowedKeys.includes(ev.key)) {
    // allowedKeys = conjunto dos caracteres validos que incluimos no array 'allowedKeys'
    // se sim, entao...

    input.value += ev.key; // key = tecla pressionada
    // o valor digitado no teclado sera acrescentado aos demais

    return;
  }

  if (ev.key === 'Backspace') {
    //
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === 'Enter') {
    calculate();
  }
});

// Evento para alterar estilo do arquivo CSS
document.getElementById('themeSwitcher').addEventListener('click', function () {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9');
    root.style.setProperty('--border-color', '#aaa');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--primary-color', '#2f32ed');
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--border-color', '#666');
    root.style.setProperty('--font-color', '#f1f5f9');
    root.style.setProperty('--primary-color', '#2225e0');
    main.dataset.theme = 'dark';
  }
});

document
  .getElementById('copyToClipboard')
  .addEventListener('click', function (ev) {
    // o evento esta apontado para o PRÓPRIO BOTÃO, ou seja
    // essa funcao executará algo que modificará o botão com id => "copyToClipboard"

    const button = ev.currentTarget;
    if (button.innerText === 'Copy') {
      button.innerText = 'Copied!';
      // classList = lista de classes CSS disponiveis - que foram setadas no arquivo CSS
      // "success" = classe => .success
      button.classList.add('success');

      // window.navegator => propriedade do window (como o alert, confirm, prompt...)
      // .clipboard => joga p o clipboard o: .writeText(o texto de resultInput.value)
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = 'Copy';
      button.classList.remove('success');
    }
  });

// "#ed2f4f"
// "#b2243b")
