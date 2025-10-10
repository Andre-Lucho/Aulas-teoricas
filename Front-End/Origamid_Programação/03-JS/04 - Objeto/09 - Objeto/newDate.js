/*
new Date()
-----------------

O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. 
A data é baseada no relógio interno do computador. */

const agora = new Date();
// console.log(agora);
// DiaSemana Mês Dia Ano HH:MM:SS GMT

//agora.getDate(); // Dia
// agora.getDay(); // Dia da Semana ex: 5 = Fri --> começa em 0 = Domingo
// agora.getMonth(); // Número dia mês --> começa em 0 = Janeiro
// agora.getFullYear(); // Ano
// agora.getHours(); // Hora
// agora.getMinutes(); // Minutos
// agora.getTime(); // ms desde 1970
// agora.getUTCHours(); // = hora atual + 3 horas!!
// agora.getUTCHours() - 3; //(expressão p/ corrigir p/ horário de Brasília)

/*
getTime()
-------------------

O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.*/

const agora2 = new Date();
agora2.getTime(); //
// total de dias desde 1 de janeiro de 1970
const diasPassados = agora2.getTime() / (24 * 60 * 60 * 1000);
// console.log(diasPassados);

/*
Dias até
-------------------

Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data. */

const agora3 = new Date();
const promocao = new Date("December 24 2024 23:59");
// ou: const promocao = new Date("12 24 2024 23:59");

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

// referenciando as 2 datas à -->  01/01/1970!
const diasAgora = converterEmDias(agora3);
// console.log(diasAgora);
const diasPromocao = converterEmDias(promocao);
// console.log(diasPromocao);

const faltam = Math.floor(diasPromocao - diasAgora);
console.log(faltam);
