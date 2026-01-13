# String, number e boolean

### String, number e boolean são tipos básicos do TypeScript (primitivos).

#### Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).

```
const frase: string = 'Front End';
const preco: number = 500;
const condi: boolean = preco > 100; *
* expressoes ou valores true / false

```

## Typeof

### typeof é um operador de JavaScript que retorna uma 'string' indicando o tipo do dado.

#### Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol.

```
const frase = 'Front End';
const preco = 500;
const condi = preco > 100;

if (typeof frase === 'string') {
  console.log('frase é string');
}
if (typeof preco === 'number') {
  console.log('preco é number');
}
if (typeof condi === 'boolean') {
  console.log('condi é boolean');
}
```

## Type guard

### O typeof funciona como um type guard:

#### Garante o funcionamento do código apenas se uma condição é atendida

<br>

## String, Number e Boolean

#### Não confundir string, number e boolean com String, Number e Boolean.<br> Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.

```
const frase1 = new String('Front End');
const frase2 = String('Front End'); // usando o método String
const frase3 = 'Front End';

console.log(typeof frase1); // object
console.log(typeof frase2); // string
console.log(typeof frase3); // string

```

### OBS:

---

### 1) {}, document, [ ], null --> todos retornam 'object' no console;

### 2)

```
const frase: string = 'Font End';

console.log(typeof string) --> undefined **
```

### IMPORTANTE:

### \*\* 'string' NÃO é um tipo primitivo de JavaScript --> é apenas um 'superset' do TypeScript
