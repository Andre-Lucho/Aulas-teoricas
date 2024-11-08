class NomeInvalido implements Exception {
  String error() => "Nome invalido";

  @override
  String toString() {
    return "Excecao costumizada: ${error()}";
  }
}
