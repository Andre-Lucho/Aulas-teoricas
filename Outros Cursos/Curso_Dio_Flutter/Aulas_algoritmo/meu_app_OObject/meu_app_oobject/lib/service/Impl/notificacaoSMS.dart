import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/service/notificacaointerface.dart';

class NotificacaoSMS implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Enviando SMS para: ${pessoa.getNome()}");
  }
}
