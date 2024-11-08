import 'package:meu_app_oobject/enum/tipo_notificacao.dart';

abstract class Pessoa {
  String _nome = "";
  dynamic _idade = 0;
  String _email = "";
  dynamic _celular = 0;
  String _token = "";
  // String _endereco = "";
  // String _profissao = "";
  // bool? _filhos;
  // bool? _casado;
  // String _hobbies = "";
  TipoNotificacao _tipoNotificacao = TipoNotificacao.nenhum;

// Nome
  void setNome(String nome) {
    _nome = nome;
  }

  String getNome() {
    return _nome.toUpperCase();
  }

// Idade
  void setIdade(dynamic idade) {
    _idade = idade;
  }

  dynamic getIdade() {
    return _idade;
  }

// Email
  void setEmail(String email) {
    _email = email;
  }

  String getEmail() {
    return _email;
  }

// Token
  void setToken(String token) {
    _token = token;
  }

  String geToken() {
    return _token;
  }

// Celular
  void setCelular(dynamic celular) {
    _celular = celular;
  }

  dynamic getCelular() {
    return _celular;
  }

// Tipo Notificacao
  void setTipoNotificacao(TipoNotificacao tipoNotificacao) {
    _tipoNotificacao = tipoNotificacao;
  }

  TipoNotificacao getTipoNotificacao() {
    return _tipoNotificacao;
  }

// Construtor
  Pessoa(String nome, dynamic idade, {TipoNotificacao tipoNotificacao = TipoNotificacao.nenhum}) {
    _nome = nome;
    _idade = idade;
    _tipoNotificacao = tipoNotificacao;
  }

// toString
  @override
  String toString() {
    return {"nome": _nome, "idade": _idade, "TipoNotificacao": _tipoNotificacao}
        .toString();
  }
}
