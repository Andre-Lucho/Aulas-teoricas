const Imgcontainer = document.querySelector('.galery-container');
const regex = /^(\.\/img\/)(.+?)(\.[a-zA-Z0-9]+)$/;

async function fetchImagens(file) {
  try {
    const response = await fetch(file);

    if (!response.ok) throw new Error(response.status);

    const listaImagens = await response.json();
    listaImagens.forEach((img) => {
      let imgPath = img;

      let figureElem = document.createElement('figure');
      let imgElem = document.createElement('img');
      let figcaptionElem = document.createElement('figcaption');

      figureElem.classList.add('img-container');

      imgElem.src = imgPath;
      imgElem.classList.add('img-imagem');
      let nomeImagem = img.replace(regex, '$2');
      imgElem.alt = `Imagem esportiva com a prática de ${nomeImagem}`;

      figcaptionElem.innerText = nomeImagem;
      figcaptionElem.classList.add('img-legenda');

      figureElem.append(imgElem, figcaptionElem);
      Imgcontainer.append(figureElem);
    });
  } catch (error) {
    console.error('Erro ao buscar ou renderizar as imagens:', error);
  }
}

fetchImagens('./imagens.json');

// <figure>
//   <img src="" alt="" / width="300">
//   <figcaption>Legenda da figura 1</figcaption>
// </figure>
