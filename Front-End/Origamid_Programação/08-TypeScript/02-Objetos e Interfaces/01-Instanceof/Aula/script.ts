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

// console.log(carro);

// console.log(carro.verPortas());

// console.log(carro instanceof Automovel); //true

// ----------------------------------------------------

class Carro {
  tipo: string;
  constructor(tipo: string) {
    this.tipo = tipo;
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
  if (busca === 'carro') return new Carro('sedan');
  if (busca === 'onibus') return new Onibus('mercedes');
  else return null;
}

// automovel pode ser Carro, Onibus ou null == não foi executado
const auto = buscarAutomovel('carro');

// auto?.tipo
// erro --> mesmo com o optional chaining == como auto pode ser Carro E/OU Onibus --> na class Onibus não temos a propriedade 'tipo'

// Devo usar o instanceof para confirmar a herança:

//if (auto instanceof Carro) console.log(auto.tipo); // única possibilidade !!

// --------------------------------------------------------

class Automovel2 {
  tipo: string;
  constructor(tipo: string) {
    this.tipo = tipo;
  }
}

class Carro2 extends Automovel2 {
  marca: string;
  constructor(tipo: string, marca: string) {
    super(tipo); // extensão (reciação) da classe Pai
    this.marca = marca;
  }
}

class Portas2 extends Automovel2 {
  quant: number;
  constructor(tipo: string, quant: number) {
    super(tipo);
    this.quant = quant;
  }
}

function buscarAutomovel2(busca: string) {
  if (busca === 'carro') return new Carro2('carro', 'Clio');
  if (busca === 'porta') return new Portas2('portas', 4);
  else return null;
}

const auto2 = buscarAutomovel2('carro');
//console.log(auto2?.marca);
// erro --> mesmo com o optional chaining == como auto2 pode ser Carro2 E/OU Portas2 --> na class Portas2 não temos a propriedade 'marca'

if (auto2 instanceof Carro2) console.log(auto2.marca);
// Tenho disponível as propriedades, tanto da classe, como da classe herdada

if (auto2 instanceof Portas2) console.log(auto2.tipo);
// não retorna nada, pois auto2 não é uma instância de Portas2

if (auto2 instanceof Automovel2) console.log(auto2.tipo);
// nessa condição, auto2 é uma instancia de Automovel2, então só pode herdar a prorpiedade tipo
