import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/service/notificacaointerface.dart';

class NotificacaoEmail implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Enviando Email para: ${pessoa.getNome()}");
  }
}
