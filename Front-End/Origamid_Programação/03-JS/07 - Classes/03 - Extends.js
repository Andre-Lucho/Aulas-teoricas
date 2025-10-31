/* 

Subclasses
-----------------------------------
É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo. 
A classe será mais genérica em relação a subclasses; A subclasse herdaria prop e métodos da Classe
*/

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
}
const honda = new Moto(2);
// honda.acelerar();
// honda.empinar();

const clio = new Veiculo(4);
// console.log(clio.acelerar()); //Acelerou

// console.log(clio.empinar()); // undefined

honda.rodas = 4;
// console.log(honda.rodas); //4

/*

Métodos
-----------------------------------

Podemos escrever por cima de um método herdado. */

class Veiculo2 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}
class Moto2 extends Veiculo2 {
  acelerar() {
    console.log('Acelerou BASTANTE');
  }
}

const honda2 = new Moto2(2);
// honda2.acelerar();
// ainda temos no protótipo de Veiculo2 o método acelerar 'original'...porém, agora honda2 irá acessar PRIMEIRO
// o NOVO VALOR de acelarar de Moto2!

/*

Super
-----------------------------------

É possível utilizar a palavra-chave 'super' para falarmos com a classe-pai e acessarmos os seus métodos e propriedades. 

Serve p ACRESCENTAR algum comando que será executado juntamente com o(s) comando(s) presente(s) na classe-pai do Extends */

class Veiculo3 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}
class Moto3 extends Veiculo3 {
  acelerar() {
    super.acelerar();
    console.log('Acelerou Muito');
  }
}

const honda3 = new Moto3(2);
honda3.acelerar();

// Acelerou
// Acelerou Muito

// Serve para continuarmos/utilizarmos os valores da classe origianl, acrescidos com valores da nova classe extendida
// Também podemos acrescentar metodos/props no construtor:

/*

Super e Constructor
-----------------------------------

Podemos utilizar o super para estendermos o método constructor. */

class Veiculo4 {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Moto4 extends Veiculo4 {
  constructor(rodas, combustivel, capacete) {
    // estende as propriedades do constructor! (COPIAR os mesmos argumentos do construtor-pai e acrescentar as novas presentes em this!!)
    super(rodas, combustivel);
    // aqui, é obrigatório utilizar 'super' + COPIAR os mesmos argumentos do construtor-pai!!
    this.capacete = capacete;
  }
}

const honda4 = new Moto4(4, 'Gasolina', true);
