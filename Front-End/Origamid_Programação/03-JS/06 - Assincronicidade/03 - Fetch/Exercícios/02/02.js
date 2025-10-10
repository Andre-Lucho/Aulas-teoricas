// Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const button = document.querySelector(".button");
const div = document.querySelector(".coin-return span");

function getCoin() {
  const coinValue = fetch("https://blockchain.info/ticker");
  coinValue.then((r) => {
    // console.log(r)
    r.json().then((body) => {
      const coinObj = body.BRL.buy;
      console.log(coinObj);
      // const coinToText = JSON.stringify(coinObj);
      // console.log(coinToText);
      div.innerText = coinObj;
    });
  });
}

setInterval(getCoin, 30000); //30x1000
