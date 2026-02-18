/* 
1)

const links = document.querySelectorAll('.link');

const linksMod = (elems: NodeList) => {
  elems.forEach((elem) => {
    elem instanceof HTMLAnchorElement ? (elem.style.color = '#fff') : null;
    if (elem instanceof HTMLButtonElement) {
      elem.style.padding = '.8rem 1.2rem';
      elem.style.border = 'solid 2px black';
      elem.style.borderRadius = '.5rem';
      elem.style.backgroundColor = 'blue';
      elem.style.cursor = 'pointer';
    }
  });
};

linksMod(links);

ACIMA: não está errado, mas o objetivo é escrever uma função que aplica estilos aos elementos do DOM

------------------------------------------------------------------------ */

// 2)

/* const links = document.querySelectorAll('.link');

function ativarElemento(elem: HTMLElement) {
  if (elem instanceof HTMLAnchorElement) {
    elem.style.color = '#fff';
  } else if (elem instanceof HTMLButtonElement) {
    elem.style.padding = '.8rem 1.2rem';
    elem.style.border = 'solid 2px black';
    elem.style.borderRadius = '.5rem';
    elem.style.backgroundColor = 'blue';

    elem.style.cursor = 'pointer';
  }
}

links.forEach((item) => {
  if (item instanceof HTMLElement) {
    ativarElemento(item);
  }
}); */

// refatorado:

const links = document.querySelectorAll('.link');

const buttonStyles: Partial<CSSStyleDeclaration> = {
  padding: '.8rem 1.2rem',
  border: 'solid 2px black',
  borderRadius: '.5rem',
  backgroundColor: 'blue',
  cursor: 'pointer',
};

function ativarElemento(elem: HTMLElement) {
  if (elem instanceof HTMLAnchorElement) {
    elem.style.color = '#fff';
  } else if (elem instanceof HTMLButtonElement) {
    Object.assign(elem.style, buttonStyles);
  }
}

links.forEach((item) => {
  if (item instanceof HTMLElement) {
    ativarElemento(item);
  }
});

/* IMPORTANTE:
----------------------

ver a herança
------------------
------------------

Tenho:

HTMLAnchorElement e HTMLButtonElement extendem de HTMLElement

Se eu fizesse a verificação de um deles, o estilo não seria aplicado ao outro e vice-versa;
Mas, ambos herdam prop e metodos de HTMLElement 

*/
