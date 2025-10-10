export default class Countdown {
  constructor() {
    // this.futureDate = futureDate;
  }
  // pq a variávle futereDate no constructor?? Pq, no nessa API, eu quero trabalhar apenas com uma data futura!!!!
  // Se eu passar a utilizar outras data, seria interessante setar + 'this's junto com seus métodos get's, apagando o 'this' do construtor

  get _actualDate() {
    return new Date();
    // data atual completa
  }

  // get _newDate() {
  //   return new Date(this.date);
  // }

  // set _newDate(date) {
  //   this.date = date;
  // }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  set _futureDate(futureDate) {
    this.futureDate = futureDate;
  }

  get _timeStampDiff() {
    //em milissegundos
    return this._futureDate.getTime() - this._actualDate.getTime();
    // em mms
  }

  get _daysTo() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    // (24 * 60 * 60 * 1000) = qt ms tem 1 dia! === [86.400.000 ms em 1 dia]
  }
  get _hoursTo() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get _minTo() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get _secTo() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get _total() {
    const days = this._daysTo;
    const hours = this._hoursTo % 24;
    const mins = this._minTo % 60;
    const secs = this._secTo % 60;
    // o que resta da divisão por 24h = aqui tenho qts horas a cada 24horas === (a cada 24h o countdown zera e  'enche' novamente!!
    return {
      days,
      hours,
      mins,
      secs,
    };
  }
}

const daysToPromo = new Countdown("24 December 2024 23:59:59 GMT-0300");
/* para evento acontecendo no horário do BR = COM GMT; cálculo será p dias que faltam no BR
caso o usuário esteja fora, e evento acontecendo no local de origem === SEM GMT; cálculo será p dias que faltam naquele país, conforme seu fuso-horário!! */

// console.log(daysToPromo._actualDate);
// console.log(daysToPromo._futureDate);
// console.log(daysToPromo._timeStampDiff);
// console.log(daysToPromo._daysTo);
// // qts dias faltam para o Natal
// console.log(daysToPromo._hoursTo);
// // qts horas faltam para o Natal

// console.log(daysToPromo._total);

// setInterval(() => {
//   console.log(daysToPromo._total);
// }, 1000);
// mostrando a cada segundo
