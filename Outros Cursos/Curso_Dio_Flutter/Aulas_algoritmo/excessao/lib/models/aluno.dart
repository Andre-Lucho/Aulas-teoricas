class Aluno {
  String _nome = "";
  final List<double> _notas = [];

  // Aluno(String nome) {
  //   _nome = nome;
  // }
  //Boas Práticas
  //Posso substituir pelo algoritmo do Construtor pelo simplificado:

  Aluno(this._nome);

  void setNome(String nome) {
    _nome = nome;
  }

  String getNome() {
    return _nome.toUpperCase();
  }

  // funcao que ira pegar a lista de notas que foi digitada anteriormente

  List<double> getNotas() {
    return _notas;
  }

  // funcao onde adiciono novas notas

  void adicionarNota(double nota) {
    _notas.add(nota);
  }

  double retornaMedia() {
    // var totalNotas = 0.0;
    // for (var nota in _notas) {
    //   totalNotas = totalNotas + nota;
    // }
    // var media = totalNotas / _notas.length;

    //Boas Práticas
    //Posso substituir pelo algoritmo simplificado abaixo:
    var media =
        _notas.reduce((value, element) => value + element) / _notas.length;

    return media.isNaN ? 0 : media;
  }

  bool aprovacao(double notaCorte) {
    return retornaMedia() >= notaCorte;
  }
}
