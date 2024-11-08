// // AQUI COMO EXEMPLO DE CLASSE, JA QUE A CLASSE PESSOA FOI TRANSFORMADA EM ABSTRACT //

// class Pessoa {
//   String _nome = "";
//   dynamic _idade = 0;
//   // String _endereco = "";
//   // String _profissao = "";
//   // bool? _filhos;
//   // bool? _casado;
//   // String _hobbies = "";

//   // setando = atribuindo uma string "nome" a Funcao
//   //void - nao retorna - somente fica gravado na variavel
//   void setNome(String nome) {
//     // a propriedade _nome esta recebendo (sendo atribuida) o metodo "nome"
//     // _ = propriedade privada
//     // this aqui e opcional
//     this._nome = nome;
//   }

// //get = conseguimos obter o método "nome" atribuido a _nome. Ele foi gravado atraves do setNome
//   String getNome() {
//     return _nome;
//   }
// // os metodos set e get + "_"encapsularam a propriedade _nome -
// //essa propriedade nao esta mais acessivel a alteracao direto pelo command line do arq  bin/meu_app_oobject.dart

//   void setIdade(dynamic idade) {
//     this._idade = idade;
//   }

//   dynamic getIdade() {
//     return _idade;
//   }

//   Pessoa(String nome, dynamic idade) {
//     this._nome = nome;
//     this._idade = idade;
//   }

//   @override
//   String toString() {
//     return {"nome": _nome, "idade": _idade}.toString();
//   }
// }
