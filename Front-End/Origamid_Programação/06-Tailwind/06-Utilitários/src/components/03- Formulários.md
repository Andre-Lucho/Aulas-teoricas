# Formulários

## focus

### Remover o outline e estilizar com border/ring tornará o estilo mais consistente entre os navegadores.

```
<div class="grid gap-1 mb-4">
  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    type="text"
    class="border-2 border-gray-300 rounded-md block p-2 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
</div>

```

## accent-color

### Define a cor do outline (Firefox), checkbox, radio e outros elementos.

```
<form
  action=""
  class="max-w-md mx-auto my-8 bg-gray-100 p-4 rounded-sm accent-purple-500"
>
  <div>
    <label class="flex items-center gap-2" for="termos">
      <input
        id="termos"
        name="termos"
        type="checkbox"
        class="size-4"
        checked
      />Li e aceito os termos.
    </label>
  </div>
</form>

```

## appearance-none

### Remove a estilização padrão do navegador.

```
<select
  class="mb-4 border-2 rounded-md p-2 border-gray-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100 appearance-none pr-8 bg-[url('./img/seta.svg')] bg-no-repeat bg-[center_right_0.5rem]"
  name=""
  id="">
  <option value="">Rio de Janeiro</option>
  <option value="">São Paulo</option>
  <option value="">Tocantins</option>
</select>


```

## File

### O modificador file: permite modificar o estilo do botão que permite fazer o upload de arquivos.

```
<input
  type="file"
  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-2 file:border-gray-400 file:border-solid file:text-sm file:font-semibold file:bg-gray-300 file:text-gray-700 hover:file:bg-gray-200 focus:outline-none file:focus:border-yellow-400"
/>


```
