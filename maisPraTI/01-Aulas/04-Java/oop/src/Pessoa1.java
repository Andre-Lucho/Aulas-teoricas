public class Pessoa1 {
  protected String nome;
  int idade;
  String sexo;

  // construtor
  public Pessoa1(String nome, int idade, String sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  // visibilidade do método = public | tipo de retorno = void = vazio | nome do
  // método = apresentar()
  public void apresentar() {
    System.out.println("Meu nome é " + nome + " tenho " + idade + " anos e sou do sexo " + sexo);
  }

  public String getNome() {
    return this.nome;
  }

  // parei aqui = 22min
  public void setNome(String nome) {
    this.nome = nome;
  }

}

class Main {
  public static void main(String[] args) {
    Pessoa1 p1 = new Pessoa1("Pedro", 20, "m");
    p1.apresentar();
    p1.nome = "Tio"; // está desprotegido -- consigo atribuir um novo 'nome'

    System.out.println(p1.nome);

    Pessoa1 p2 = new Pessoa1("André", 43, "m");
    p2.apresentar();

  }
}

// Encapsulamento
// private = somente a classe tem acesso as prop e metodos
// protected = somente a classe e filhos diretos tem acesso
