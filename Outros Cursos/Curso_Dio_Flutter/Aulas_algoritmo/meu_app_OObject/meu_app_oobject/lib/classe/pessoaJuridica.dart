import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/enum/tipo_notificacao.dart';

class PessoaJuridica extends Pessoa {
  String _cnpj = "";

  void setCnpj(String cnpj) {
    _cnpj = cnpj;
  }

  String getCnpj() {
    return _cnpj;
  }

  PessoaJuridica(String nome, dynamic idade, String cnpj,
      {TipoNotificacao tipoNotificacao = TipoNotificacao.nenhum})
      : super(nome, idade, tipoNotificacao: tipoNotificacao) {
    _cnpj = cnpj;
  }

  @override
  String toString() {
    return {
      "nome": getNome(),
      "idade": super.getIdade(),
      "CNPJ": _cnpj,
      "Tipo de Notificacao:": getTipoNotificacao()
    }.toString();
  }
}
