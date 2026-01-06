# Space

### Adiciona uma margem padrão entre os elementos. Usa margin da mesma forma que o grid/flex usam o gap.

### space-y- --> margin-top/bottom

### space-x- --> margin-right/left

```
<footer class="text-stone-800 border-t-2 border-stone-200 mt-16 bg-stone-100">
  <div class="container grid gap-16 grid-cols-3 py-4">
    <div>
      <h4 class="font-serif text-xl text-stone-500 mb-4">Páginas</h4>
      <ul class="space-y-2">
        <li><a href="/">Imóveis</a></li>
        <li><a href="/">Contato</a></li>
        <li>
          <a href="/">Financiamento</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 class="font-serif text-xl text-stone-500 mb-4">Contato</h4>
      <ul class="space-y-2">
        <li>21 9999-9999</li>
        <li>contato@example.com</li>
        <li>Rua Ali Perto</li>
      </ul>
    </div>
    <div>
      <h4 class="font-serif text-xl text-stone-500 mb-4">Redes</h4>
      <ul class="space-y-2">
        <li>@farest.imoveis</li>
        <li>youtube.com/farest.imoveis</li>
      </ul>
    </div>
  </div>
  <p class="container border-t-2 border-t-stone-200 py-4 w-full">
    © 2024 Farest Imóveis
  </p>
</footer>


```
