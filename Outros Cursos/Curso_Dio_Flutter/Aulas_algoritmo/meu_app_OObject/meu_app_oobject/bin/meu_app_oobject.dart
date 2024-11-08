import 'package:meu_app_oobject/classe/pessoaFisica.dart';
import 'package:meu_app_oobject/classe/pessoaJuridica.dart';
import 'package:meu_app_oobject/service/enviar_notificacao.dart';
import 'package:meu_app_oobject/service/notificacaointerface.dart';
import 'package:meu_app_oobject/service/enviar_notificacao.dart';

void main(List<String> arguments) {
  // var pessoa1 = Pessoa("Andre", 42);
  // pessoa1.setNome("Andre");
  // pessoa1.setIdade(16);
  // print(pessoa1.getNome());
  // print(pessoa1.getIdade());
  // print(pessoa1);

  var pessoafisica1 = PessoaFisica("Diogo", 35, 123456789);
  print(pessoafisica1);
  var pessoajuridica1 = PessoaJuridica("Diogo", 35, "55555555555");
  print(pessoajuridica1);

  EnviarNotificacao.enviarNoticacao = EnviarNotificacao();
  enviarNotificacao.notificar(pessoafisica1);
  enviarNotificacao.notificar(pessoajuridica1);
}
