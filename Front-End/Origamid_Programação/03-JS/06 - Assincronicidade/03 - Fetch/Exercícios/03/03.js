// Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima

const button = document.querySelector(".button");
const div = document.querySelector(".joke-return span");

function getJoke() {
  const Chuck = fetch("https://api.chucknorris.io/jokes/random");
  Chuck.then((r) => {
    // console.log(r)
    r.json().then((piada) => {
      const newJoke = piada.value;
      console.log(newJoke);
      // const coinToText = JSON.stringify(coinObj);
      // console.log(coinToText);
      div.innerText = newJoke;
    });
  });
}

button.addEventListener("click", getJoke);
