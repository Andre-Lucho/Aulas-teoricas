// Uma função Debounce auxiliar (utilizada em conjunto com outras funções) utilizada com setTimeout(). Toda vez que ela é ativada, ela elimina a função específica anterior, até que vc ative apenas uma de cada vez.

// Ela serve para dar otimizacao ao código!

// callback é a função propriamente dita e delay é o tempo de espera. Pode levar + argumentos
function debounce(callback, delay) {
  let timer;

  return (...arg) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...arg);
      timer = null;
    }, delay);
  };
}

function onScroll() {
  console.log("teste");
}

const debounceScroll = debounce(onScroll, 200);

window.addEventListener("scroll", debounceScroll);
// em 1000 -> vai ativar somente 1x;
// qt + eu diminuir o tempo do timeout(delay), (-) vezes terei o meu IF com algum valor TRUE, pois timer irá receber + rapidamente o valor de null! ; então o callback(onScroll) irá ocorrer.
//  ao contrário, qt + um aumentar o delay, meu IF agora terá um valor true.

// Principalmente utilizado para eventos com scroll e resize de janela!
