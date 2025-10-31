class Veiculo3 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}
class Moto extends Veiculo3 {
  acelerar() {
    super.acelerar();
    console.log('Acelerou Muito');
  }
}

const honda3 = new Moto(2);
honda3.acelerar();
