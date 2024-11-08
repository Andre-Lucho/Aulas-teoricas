import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/service/notificacaointerface.dart';

class NotificacaoCelular implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Ligando para o Celular de: ${pessoa.getNome()}");
  }
}
