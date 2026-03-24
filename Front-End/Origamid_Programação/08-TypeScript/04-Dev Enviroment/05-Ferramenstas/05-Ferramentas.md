# Ferramentas Front

## Vite

### Vite é uma ferramenta de automação Front End. Com ela podemos gerar bundles, iniciar um live server, otimizar o código para produção e mais.

```
npm create vite@latest
// vanilla / typescript

// dentro da pasta
npm install
npm run dev
npm run build

```

## Configurações TS

### Você pode mudar as configurações do TypeScript

```
/// tsconfig.json
{
  "compilerOptions": {
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

## Bibliotecas Externas

### Instale bibliotecas externas diretamente via npm install. Se a definição de tipo não for instalada junta com a mesma, instale ela para poder utilizar a biblioteca.

```
npm install lodash
npm install --save-dev @types/lodash

// Já vem com os tipos
npm install clipboard

```

```
import _ from 'lodash';
_.difference([2, 1], [2, 3]);

import ClipboardJS from 'clipboard';
const button = new ClipboardJS('button');

function handleSuccess(event: ClipboardJS.Event) {
  console.log('Texto copiado.');
  console.log(event.action);
}

button.on('success', handleSuccess);
```
