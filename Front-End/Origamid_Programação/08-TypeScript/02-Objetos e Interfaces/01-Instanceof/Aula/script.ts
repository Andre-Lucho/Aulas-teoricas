class Automovel {
  nome: string;
  portas: number;
  constructor(nome: string, portas: number) {
    this.nome = nome;
    this.portas = portas;
  }
  verPortas() {
    return this.portas;
  }
}
const carro = new Automovel('Clio', 5);

console.log(carro.verPortas());

// console.log(carro instanceof Automovel); //true

// ----------------------------------------------------

class Carro {
  marca: string;
  constructor(marca: string) {
    this.marca = marca;
  }
}

class Onibus {
  marca: string;
  constructor(marca: string) {
    this.marca = marca;
  }
}

class Portas {
  quant: number;
  constructor(quant: number) {
    this.quant = quant;
  }
}

function buscarAutomovel(busca: string) {
  if (busca === 'carro') return new Carro('Clio');
  if (busca === 'porta') return new Portas(4);
  else return null;
}

// automovel pode ser Carro, Portas ou null == não foi executado
const auto = buscarAutomovel('carro');

// erro --> mesmo com o optional chaining == ainda pode ser null
// automovel?.

// Devo usar o instanceof para confirmar a herança:

if (auto instanceof Carro) auto.marca; // única possibilidade

// --------------------------------------------------------

class Automovel2 {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Carro2 extends Automovel2 {
  marca: string;
  constructor(nome: string, marca: string) {
    super(nome); // extensão (reciação) da classe Pai
    this.marca = marca;
  }
}

class Portas2 extends Automovel2 {
  quant: number;
  constructor(nome: string, quant: number) {
    super(nome);
    this.quant = quant;
  }
}

function buscarAutomovel2(busca: string) {
  if (busca === 'carro') return new Carro2('nome', 'Clio');
  if (busca === 'porta') return new Portas2('nome', 4);
  else return null;
}

const auto2 = buscarAutomovel2('carro');

// Tenho disponível as propriedades, tanto da classe, como da classe herdada
// if(auto2 instanceof Portas2) auto2.

// nessa condição, automovel2 é uma instancia de Automovel2, então só pode herdar a prorpiedade nome
if (auto2 instanceof Automovel2) auto2.nome;
