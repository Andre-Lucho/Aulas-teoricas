# Bibliotecas Externas

### Ao usarmos uma biblioteca externa criada em JavaScript, o TS não consegue automaticamente identificar a interface da mesma.

#### Para isso, milhares de projetos fornecem para instalação os seus arquivos .d.ts, com isso o TS passa a reconhecer a interface da mesma.

```html
<!-- index.html -->
<iframe id="vimeo" src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script src="./plugins/jquery-3.6.1.min.js"></script>
<script src="./plugins/lodash.min.js"></script>
<script type="module" src="./dist/script.js"></script>




```

IMPORTANTE: Carregar os scripts para os plugins **ANTES** do script.js

```
// terminal
npm install --save-dev @types/jquery
npm install --save-dev @types/lodash
```

### Importante: 

#### Definir a opção "types" no tsconfig.json, incluindo os types intalados, para que o TS possa localizar as interfaces e tipos dessas bibliotecas

```json
{
    "compileOnSave": true,
    "compilerOptions": {
        "types": ["jquery", "lodash"], // incluindo os types de jQuery e Lodash
        ...
}


```

```typescript
// script.ts
const body = $('body');
body.addClass('ativo');

_.intersection([1, 2, 3, 5, 6], [2, 3, 1, 9]);

declare const Vimeo: any;
const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);
```

## Definitely Typed

### Este projeto disponibiliza milhares de interfaces de bibliotecas para o TypeScript.

#### https://github.com/DefinitelyTyped/DefinitelyTyped
