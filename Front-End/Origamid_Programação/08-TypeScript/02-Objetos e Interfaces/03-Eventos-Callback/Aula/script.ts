const buttons = document.querySelectorAll('.button');

// posso passar como parâmetro as possíveis opções:  MouseEvent | KeyboardEvent
// porém, estou restringindo - Event é a instância mais genérico == serve para todos
// function ativar(event: Event) {
//   if (event instanceof MouseEvent) {
//     // console.log(event.target);
//   }
//   if (event instanceof KeyboardEvent) {
//     // console.log(event.touches[0].pageX);
//   }
// }

// Como é um evento de click(restrito), estou passando PointerEvent
// This: apenas demostrando onde está a ação do botão
function handleClick(this: HTMLButtonElement, event: PointerEvent) {
  const elem = event.currentTarget; // elem = EventTarget | null
  if (elem instanceof HTMLElement) console.log(elem.innerText);
}
// pq HTMLButtonElement não dá erro?
// pois as 2 instâncias possuem a prop. '.innerText'

// document.addEventListener('mousedown', ativar);
// document.addEventListener('keydown', ativar);

buttons.forEach((button) => {
  if (button instanceof HTMLButtonElement)
    button.addEventListener('click', handleClick);
});

// button01?.addEventListener('click', handleClick);
// button02?.addEventListener('click', handleClick);
