const video = document.querySelector('video'); // HTMLVideoElement
const img = document.querySelector('img'); // HTMLImageElement

video?.after;

// ------

const video2 = document.querySelector('#mainVideo'); // Element

// posso passar assim, mas pode quebrar, pois video2 retorna um elemento tipo 'Element'
video2?.after;

// Forma + segura de se fazer referencia a elemetos do DOM com TypeScript
// é sempre verificar sua instância:
if (video2 instanceof HTMLVideoElement) video2.after;

// -------------------------------------------

const links = document.querySelectorAll('.link');
console.log(links);
//links é uma interface de NodeListOf | do tipo Element

console.log(links instanceof NodeList); // instância da classe NodeList === true

links.forEach((link) => {
  link instanceof HTMLAnchorElement
    ? console.log(link.href)
    : console.log(typeof link); // object
});
