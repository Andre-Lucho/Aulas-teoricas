# Module

### Se usarmos o import/export em qualquer momento em um arquivo .ts, o TypeScript irá tratar o mesmo como o module. Consequentemente, o seu escopo não será mais global.

```
// pluginSlide.ts
function pluginSlide(seletor: string) {
  console.log(`Criar slide: ${seletor}`);
}

export default pluginSlide;

// global.ts
const URL_BASE = 'https://api.origamid.dev/json';

// script.ts
import pluginSlide from './pluginSlide.js';

pluginSlide('div');

console.log(URL_BASE);

```

## isolatedModules

### Com a configuração isolatedModules: true, não será permitida a criação de arquivos globais. Todos passarão a ser lidados como module.

```
// global.ts
export const URL_BASE = 'https://api.origamid.dev/json';

export interface Produto {
  nome: string;
  preco: number;
}

// script.ts
import { Produto, URL_BASE } from './global.js';

console.log(URL_BASE);

const livro: Produto = {
  nome: 'O Senhor dos Anéis',
  preco: 200,
};

```
