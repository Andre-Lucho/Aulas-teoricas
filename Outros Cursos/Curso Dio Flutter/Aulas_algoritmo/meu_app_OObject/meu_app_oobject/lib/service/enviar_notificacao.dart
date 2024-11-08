import 'package:meu_app_oobject/service/Impl/notificacaoCelular.dart';
import 'package:meu_app_oobject/service/Impl/notificacaoEmail.dart';
import 'package:meu_app_oobject/service/Impl/notificacaoPush.dart';
import 'package:meu_app_oobject/service/Impl/notificacaoSMS.dart';
import 'package:meu_app_oobject/classe/pessoa_abstract.dart';
import 'package:meu_app_oobject/enum/tipo_notificacao.dart';
import 'package:meu_app_oobject/service/notificacaointerface.dart';

class EnviarNotificacao {
  NotificacaoInterface? notificacao; //? = para nao ser nulo

  void notificar(Pessoa pessoa) {
    switch (pessoa.getTipoNotificacao()) {
      case TipoNotificacao.celular:
        notificacao = NotificacaoCelular();
        break;
      case TipoNotificacao.email:
        notificacao = NotificacaoEmail();
        break;
      case TipoNotificacao.pushNotification:
        notificacao = NotificacaoPUSH();
        break;
      case TipoNotificacao.sms:
        notificacao = NotificacaoSMS();
        break;
      default:
        return;
    }

    if (notificacao != null) {
      // vai seguir a diretiva da Interface - NotificacaoInterface = enviarNotificacao(Pessoa pessoa)
      notificacao!.enviarNotificacao(pessoa);
    } else {
      // nao tem um classe pessoa filha associada 
      //ou a classe em questao nao tem um tipo de notificacao ajustado
      print("Pessoa sem tipo de notificacao");
    }
  }
}
