import initNumbersAnim from "./anima-numeros.js";

export default function initFetchAnimais() {
  try {
    async function fetchAnimais(url) {
      const animaisR = await fetch(url);
      const animaisJson = await animaisR.json();
      const gridNumbers = document.querySelector(".grid-numbers");
      // console.log(animaisJson);
      animaisJson.forEach((animal) => {
        const divAnimal = creatAnimal(animal);
        // console.log(animal);
        // console.log(divAnimal);
        gridNumbers.appendChild(divAnimal);
      });
      initNumbersAnim();
    }
    fetchAnimais("../animaisAPI.json");
  } catch (erro) {
    console.log(erro);
  }

  function creatAnimal(animal) {
    // console.log(animal);
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-number>${animal.total}</span>`;
    // Template String
    // console.log(div);
    return div;
  }
}
