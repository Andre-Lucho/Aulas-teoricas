# .d.ts

### Podemos criar arquivos focados APENAS na declaração de tipos e interfaces, estes devem ser terminados em .d.ts.

### O TypeScript não irá compilar eles, mas os tipos declarados poderão ser utilizados globalmente na sua aplicação.

#### Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.

```
// global.d.ts
interface Produto {
  nome: string;
}

// script.ts
const livro: Produto = {
  nome: 'O Senhor dos Anéis',
};

```

## Nome do Arquivo

### Crie uma pasta específica para os arquivos .d.ts, pois o TS ignora arquivos que possuem o mesmo nome e diretório, em favor do arquivo que terminar em .ts.

```
// Use
// /types/script.d.ts
// /script.ts

// Não use
// /script.d.ts --> ignora esse e prioriza o script.ts
// /script.ts

```

## Declaração Global

### Não é necessário criar um arquivo global ou .d.ts para ter um tipo global.<br> É possível também declarar dentro de um arquivo do tipo module, usando o declare global {}.

```
declare global {
  interface Produto {
    nome: string;
    preco: number;
  }
}

export const livro: Produto = {
  nome: 'O Senhor dos Anéis',
  preco: 200,
};

```

## Evite Globais

### Use apenas quando necessário. Assim como variáveis globais são problemáticas, tipos globais possuem os mesmos problemas.

- ### Caso declare a mesma interface novamente, a prioridade passa a ser a do escopo local, sobreescrevendo o que estava sendo disponibilizado globalmente

- ### Ideal --> declarar no escopo local e, se precisar, exportar o type para ser usado globalmente(através do import)

```
// global.d.ts
interface Produto {
  nome: string;
  preco: number;
  cor: string;
}

// script.ts
interface Produto {
  nome: string;
  estoque: number;
  preco: string;
}

```

## declaration

### A configuração declaration: true, gera arquivos .d.ts automaticamente, com base nas interfaces dos arquivos .ts compilados.

Apenas o que for exportado ou global fará parte do arquivo .d.ts.

```
{
  "compilerOptions": {
    "declaration": true
  }
}
```
