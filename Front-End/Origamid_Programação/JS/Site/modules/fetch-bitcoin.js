export default function initFetchBitcoin() {
  try {
    async function fetchBitcoin(url) {
      const bitcoinR = await fetch(url);
      const bitcoinJson = await bitcoinR.json();
      // console.log(bitcoinJson);

      const btcPrice = document.querySelector("[data-bitcoin]");
      btcPrice.innerText = (15 / bitcoinJson.BRL.sell).toFixed(7);
      // doação de R$ 15,00
      // console.log(btcPrice);
    }
    fetchBitcoin("https://blockchain.info/ticker");
  } catch (erro) {
    console.log("erro");
  }
}
