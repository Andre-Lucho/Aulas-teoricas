"use strict";
const btnMbile = document.getElementById('btn-mobile');
function menuMobile(event) {
    const element = event.currentTarget;
    const nav = document.getElementById('nav');
    if (element instanceof HTMLElement && nav) {
        const active = nav.classList.toggle('active');
        if (active) {
            element.setAttribute('aria-expanded', 'true');
            element.setAttribute('aria-label', 'Fechar Menu');
        }
        else {
            element.setAttribute('aria-expanded', 'false');
            element.setAttribute('aria-label', 'Abrir Menu');
        }
    }
}
btnMbile?.addEventListener('pointerdown', menuMobile);
/* pq 'querySelector' não funciona e 'getElementById' funciona sem o Generics <HTMLElement>?

getElementById --> estou buscando de forma específica por um ID;
querySelector --> posso buscar por: tags, classes ou id's;

getElementById herda a interface de 'HTMLElement'

por 'querySelector' ser + genérico, o TypeScript entende que a const 'btnMobile' herda o tipo mais básico: Element.
Element não tem tem todos os métodos de interface que um 'HTMLElement' tem.

*/
