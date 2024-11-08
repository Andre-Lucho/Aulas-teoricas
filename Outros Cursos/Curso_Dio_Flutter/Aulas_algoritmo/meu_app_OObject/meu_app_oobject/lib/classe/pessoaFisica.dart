import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/enum/tipo_notificacao.dart';

class PessoaFisica extends Pessoa {
  dynamic _cpf = 0;

  void setCPF(dynamic cpf) {
    _cpf = cpf;
  }

  dynamic getCPF() {
    return _cpf;
  }

  PessoaFisica(String nome, dynamic idade, dynamic cpf,
      {TipoNotificacao tipoNotificacao = TipoNotificacao.nenhum})
      : super(nome, idade, tipoNotificacao: tipoNotificacao) {
    _cpf = cpf;
  }

  @override
  // this. e super. aqui sao opcionais -
  // por herença, fazem parte da classe mae que sera sobreescrita

  String toString() {
    return {
      "tipo": "PESSOA FISICA",
      "nome": this.getNome(),
      "idade": super.getIdade(),
      "CPF": _cpf,
      "Tipo de Notificacao:": getTipoNotificacao()
    }.toString();
  }
}
