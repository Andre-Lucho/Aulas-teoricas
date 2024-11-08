double calcularDesconto(double valor, double desconto, bool percentual) {
  //Excessoes
  if (valor <= 0) {
    throw ArgumentError("O valor do produto digitado esta zerado");
  }
  if (desconto <= 0) {
    throw ArgumentError("O valor do desconto digitado esta zerado");
  }
  //
  if (percentual) {
    return valor - ((valor * desconto) / 100);
  } else {
    return valor - desconto;
  }
}

double retornaValor(valor) {
  return 50;
}
