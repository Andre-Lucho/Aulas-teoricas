// const links: NodeList = document.querySelectorAll('.link');

// const linksMod = (elems: NodeList) => {
//   elems.forEach((elem) => {
//     elem instanceof HTMLAnchorElement ? (elem.style.color = '#fff') : null;
//     if (elem instanceof HTMLButtonElement) {
//       elem.style.padding = '.8rem 1.2rem';
//       elem.style.border = 'solid 2px black';
//       elem.style.borderRadius = '.5rem';
//       elem.style.backgroundColor = 'blue';
//       elem.style.cursor = 'pointer';
//     }
//   });
// };

// linksMod(links);

// ----------------------------------------

const links = document.querySelectorAll('.link');

links.forEach((item) => {
  if (item instanceof HTMLElement) {
    ativarElemento(item);
  }
});

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = 'red';
  elemento.style.border = '2px solid red';
}

/* Nesse exemplo:
1) estou aplicando o mesmo estilo aos 2 tipos de elementos

2) MAIS IMPORTANTE:
----------------------

ver a herança
------------------
------------------

Tenho:

HTMLAnchorElement
HTMLButtonElement

Se eu fizesse a verificação de um deles, o estilo não seria aplicado ao outro e vice-versa;
Mas, ambos herdam prop e metodos de HTMLElement 

*/
