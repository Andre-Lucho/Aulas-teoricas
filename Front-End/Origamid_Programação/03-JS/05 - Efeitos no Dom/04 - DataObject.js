/*
new Date()
-----------------

O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. 
A data é baseada no relógio interno do computador. */

const agora = new Date();
console.log(agora);
// Semana Mês Dia Ano HH:MM:SS GMT
// agora.getDate(); // Dia

// agora.getDay(); // Dia da Semana ex: 5 = Fri --> começa em 0 = Domingo
// agora.getMonth(); // Número dia mês --> começa em 0 = Janeiro
// agora.getFullYear(); // Ano
// agora.getHours(); // Hora
// agora.getMinutes(); // Minutos
// agora.getTime(); // ms desde 1970
// agora.getUTCHours() - 3; //(expressão p/ corrigir p/ horário de Brasília)
// agora.getUTCHours(); // = hora atual + 3 horas!!

// const futuro = new Date();
// console.log(futuro()) ;

/*
getTime()
-------------------

O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.*/

const agora2 = new Date();
agora2.getTime(); //
// total de dias desde 1 de janeiro de 1970
const diasPassados = agora2.getTime() / (24 * 60 * 60 * 1000);
console.log(diasPassados);

/*
Dias até
-------------------

Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data. */

const agora3 = new Date();
const promocao = new Date("December 24 2024 23:59");

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora3);
const diasPromocao = converterEmDias(promocao);
const faltam = diasPromocao - diasAgora;
console.log(faltam);

const agora4 = new Date();
console.log(agora4.getDate());

const futuro = new Date("12 24 2024 23:59");
// passando uma data futura(de forma completa)

console.log(futuro);

const promocao2 = new Date("December 24 2024 23:59");

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}
const diasAgora2 = converterEmDias(agora4);
const diasPromocao2 = converterEmDias(promocao2);
const faltam2 = Math.floor(diasPromocao2 - diasAgora2);
// 249 dias para a promoção (Natal)
