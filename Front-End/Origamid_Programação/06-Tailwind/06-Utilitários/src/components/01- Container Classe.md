# Container Classe (v4)

### A classe .container adiciona um max-width relativo aos tamanhos de screen definidos.

#### Padrões da classe .container do Tailwind:

```
.container {
  width: 100%;

  /* sm */
  @media (width >= 40rem) {
    max-width: 40rem;
  }

  /* md */
  @media (width >= 48rem) {
    max-width: 48rem;
  }

  /* lg */
  @media (width >= 64rem) {
    max-width: 64rem;
  }

  /* xl */
  @media (width >= 80rem) {
    max-width: 80rem;
  }

  /* 2xl */
  @media (width >= 96rem) {
    max-width: 96rem;
  }
}

```

### É possível modificar ela e qualquer outra classe padrão através do @utility.

#### index.css:

---

```
@import 'tailwindcss';

@theme {}
@layer components {}


@utility container {
  margin: 0 auto;
  padding: 0 0.5rem;
  @media (width >= 40rem) {
    padding: 0 1rem;
  }
}

```

# Container Classe (v3)

### A classe .container adiciona um max-width relativo aos tamanhos de screen definidos. É possível centralizar e adicionar padding nas configurações.

max-width: 100%;

sm (640px) max-width: 640px;

md (768px) max-width: 768px;

lg (1024px) max-width: 1024px;

xl (1280px) max-width: 1280px;

2xl (1536px) max-width: 1536px;

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem', (** abaixo do 'sm')
        sm: '1rem',
      },
    },
  },
};

```

```
<footer class="text-stone-800 border-t-2 border-stone-200 mt-16 bg-stone-100">
  <div class="container grid gap-8 grid-cols-3 py-4">
    <div>
      <h4 class="font-serif text-xl text-stone-500 mb-4">Páginas</h4>
      <ul class="grid gap-2">
        <li><a href="/">Imóveis</a></li>
        <li><a href="/">Contato</a></li>
        <li>
          <a href="/">Financiamento</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 class="font-serif text-xl text-stone-500 mb-4">Contato</h4>
      <ul class="grid gap-2">
        <li>21 9999-9999</li>
        <li>contato@example.com</li>
      </ul>
    </div>
    <div>
      <h4 class="font-serif text-xl text-stone-500 mb-4">Redes</h4>
      <ul class="grid gap-2">
        <li>@farest.imoveis</li>
        <li>yt.com/farest</li>
      </ul>
    </div>
  </div>
  <p class="container border-t-2 border-t-stone-200 py-4 w-full">
    © 2024 Farest Imóveis
  </p>
</footer>
```
