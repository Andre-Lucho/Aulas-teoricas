import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/service/notificacaointerface.dart';

class NotificacaoPUSH implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Notificando via PUSH o(a) usuario(a): ${pessoa.getNome()}");
  }
}
