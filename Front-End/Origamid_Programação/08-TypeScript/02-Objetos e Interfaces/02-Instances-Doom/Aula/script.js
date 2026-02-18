"use strict";
const video = document.querySelector('video'); // HTMLVideoElement
const img = document.querySelector('img'); // HTMLImageElement
video?.after;
// 1) aqui, estou selecionando um elemento específico do DOM = tag 'video', que é um objeto do tipo HTMLVideoElement
// ------
const video2 = document.querySelector('#mainVideo'); // Element
// 2) agora, estou a seleção não é específica, pois uma 'id' pode se referir a qualquer elemento do DOM
// console.log(video);
// console.log(video2);
// Forma + segura de se fazer referencia a elemetos do DOM com TypeScript
// é sempre verificar sua instância:
if (video2 instanceof HTMLVideoElement)
    video2.after;
// -------------------------------------------
const links = document.querySelectorAll('.link');
console.log(links);
//links é uma interface de NodeListOf | do tipo Element
console.log(links instanceof NodeList); // instância da classe NodeList === true
links.forEach((link) => {
    link instanceof HTMLAnchorElement
        ? console.log(link.href)
        : console.log('Esse node não é um "HTMLAnchorElement"');
});
const arrayLinks = Array.from(links); // arrayLink --> Element[]: interface Array de Elements
const anchorLinks = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
console.log(arrayLinks);
console.log(anchorLinks);
// em versões mais antigas, o TypeScript não teria como saber que 'anchorLinks' é do tipo HTMLAnchorElement[], pois ele não executa o 'filter()'
// *** por isso, é SEMPRE devemos VERIFICAR a instância dos elementos do DOM
