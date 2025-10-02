/*

CSS Modules
-----------------------------------
Os modules garantem que as classes utilizada sejam sempre únicas, evitando o conflito. 
O modo já vem configurando com o Vite, basta definirmos o nome do arquivo css com a palavra .module. 
Ex: Produto.module.css. Devemos definir um nome para a importação (Ex.:  styles), e a mesma será transformada em um objeto que possui nomes únicos para as classes.

Produto.jsx
----------------
import styles from './Produto.module.css';
console.log(styles) --> tenho um objeto com: 
{
propriedade:  titulo da classe 
valor: _titulo da classe_ + uma string aleatoriamente gerada 
}

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

Produto.module.css
------------------------------
.titulo,
.preco {
  color: #43c;
}

.preco {
  font-weight: bold;
}

.comprar {
  transform: rotate(90deg) translateY(-100px);
}

Ele gera nomes de classes apenas, então utilize o objeto direto no className e não no atributo style */

/*
camelCase
-------------------
Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. 
Não utilize hífens titulo-principal. 

*/

/*
Funcionalidades Extras
-------------------------------------
O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.

@values cor: red;

.titulo {
  color: cor;
}

no local de composes use a vírgula .titulo, .preco {}
.preco {
  composes: titulo;
  font-weight: bold;
}

no local de variáveis utilize variáveis de CSS com o var()
@value width: 900px;

crie um css global utilizando o IMPORT puro para quando precisar de estilos globais
:global .container {
  max-width: width;
}

*/
