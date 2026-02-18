// 1

const button01 = document.querySelector('.button01');
// button --> Element | null --> inespecífico, não possui o evento de pointerdown'
// recebo um lint no 'addEventListener'

function ativar(event: Event) {
  // console.log(event.pageX); // não existe em Event
  if (event instanceof PointerEvent) {
    // console.log(event.pageX);
  }
  // posso usar o instanceof para verificar a instância do evento
  // e acessar as propriedades e métodos específicos da instância
}

// -------------------------------------------------------------

// 2

// function ativarEvento(event: Event) {
//   if (event instanceof MouseEvent) console.log(event.target);
//   if (event instanceof KeyboardEvent) console.log(event.key);
//   if (event instanceof TouchEvent) console.log(event.touches[0].pageX);
// }

// Eventos:
// --------
// 1
// button01?.addEventListener('pointerdown', ativar);

// 2
// button01?.addEventListener('mousedown', ativarEvento);
// window.addEventListener('touchstart', ativarEvento);
// document.documentElement.addEventListener('keydown', ativarEvento);

// 3 - This

const button02 = document.querySelector('.button02');

function handleClick(this: HTMLButtonElement, event: Event) {
  console.log(this);
}

button02?.addEventListener('click', handleClick);

// 4 - target e currentTarget

const button03 = document.querySelector('.button03');

function handleClick03(event: MouseEvent) {
  const currentTarget = event.currentTarget;
  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget.innerText);
  }
}

button03?.addEventListener('click', handleClick03);
