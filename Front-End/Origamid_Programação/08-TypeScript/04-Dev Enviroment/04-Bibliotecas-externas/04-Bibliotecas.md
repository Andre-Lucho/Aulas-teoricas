# Bibliotecas Externas

### Ao usarmos uma biblioteca externa criada em JavaScript, o TS não consegue automaticamente identificar a interface da mesma.

#### Para isso, milhares de projetos fornecem para instalação os seus arquivos .d.ts, com isso o TS passa a reconhecer a interface da mesma.

```
<!-- index.html -->
<iframe id="vimeo" src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script src="./plugins/jquery-3.6.1.min.js"></script>
<script src="./plugins/lodash.min.js"></script>
<script type="module" src="./dist/script.js"></script>
```

```
// terminal
npm install --save-dev @types/jquery
npm install --save-dev @types/lodash
```

```
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
