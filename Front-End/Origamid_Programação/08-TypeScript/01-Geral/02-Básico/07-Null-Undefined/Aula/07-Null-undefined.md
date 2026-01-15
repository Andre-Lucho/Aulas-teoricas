# Null

### Null é um tipo primitivo que representa a ausência de valor.<br> É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

```
const button = document.querySelector('button'); **1
const config = localStorage.getItem('config'); **2

**1: Lint: button: HTMLButtonElement | null
**2: Lint: config: string | null

if (button !== null) {
  button.click(); **3
  }

**3 Lint: button: HTMLButtonElement


outras formas de escrita:
-------------------------

a) if (button) {
  button.click();
}

if (button) button.click();

b) button?.click(); -->
se button retornar null ou undefined, o método não é executado
? == optional chaining




console.log(typeof null);
--------------------------
BUG do JS ---> Null é um tipo PRIMITIVO e não um objeto


```

### Importante: Sempre que um retorno de um objeto JS pode ser null, temos que verificar a existência dele IF()! (olhar acima)

<br>

## Undefined

### Undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.

```
let total;
console.log(total); // undefined

const data = {};
console.log(data.nome);

```

<br>

## Propriedades Opcionais

### Podemos definir propriedades opcionais utilizando opcional?: string.<br> Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.

Importante em Objetos

```
interface Product {
  nome?: string;
}

const livro: Product = {};
const jogo: Product = {
  nome: 'Ragnarok',
};

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
```

<br>

## strictNullChecks

### SEM o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined.<br> Consequentemente, para de checar casos onde realmente o null | undefined podem ser retornados.

```
tsconfig.json

{
  "compilerOptions": {
    "target": "ESNext",
    "strict": true,
    "strictNullChecks": true // já incluso no strict
  }
}

```
