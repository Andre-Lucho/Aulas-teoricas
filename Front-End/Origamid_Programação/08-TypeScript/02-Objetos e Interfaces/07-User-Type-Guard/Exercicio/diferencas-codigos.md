## Diferenças entre os arquivos do exercicio: script.ts e script02.ts

1. ### Escopo do Type Guard

   Esta é a principal diferença filosófica entre os dois arquivos.

   O que valida:
   - script.ts --> O array inteiro (verifica data[0])
   - script02.ts --> Cada item individualmente<br>  
     Granularidade
   - script.ts --> Macro (valida a coleção)
   - script02.ts --> Micro (valida o elemento)<br>

2. ### Separação de Responsabilidades<br>

   script.ts tem uma separação mais rígida:<br>
   - handleType
     → só valida o tipo (retorna true/false)<br>

   - fetchApi01
     → contém toda a lógica de renderização HTML<br>
     O comentário no arquivo inclusive explica isso: "Um Type Guard é puro: ele só valida e retorna true ou false."<br>

   script02.ts distribui a responsabilidade em duas funções de negócio:
   - isCurso → valida um item

   - handleCursos → cuida da renderização, usando isCurso como filtro

3. ### Uso de .filter() com Type Guard
   - script.ts → usa if (handleType(data)) para validar o array inteiro, se os outros itens do array forem inválidos, eles não seriam detectados
   - script02.ts → usa data.filter(isCurso) para filtrar itens inválidos - o TypeScript infere automaticamente que os elementos restantes são do tipo guardado

4. ### Verificação Adicional com typeof
   - script02.ts faz uma checagem extra que o script.ts não faz:  
      "typeof curso === 'object'"<br>

   #### Isso é uma boa prática, pois o operador in lança erro se o operando da direita não for um objeto.

### Conclusão

---

- #### script02.ts representa uma solução mais robusta e idiomática, pois o Type Guard: 'isCurso' opera no nível do item individual, permitindo filtrar elementos inválidos do array com .filter()

- #### script.ts adota uma separação de responsabilidades mais explícita e "pura", mas sua validação é menos precisa por checar apenas data[0].
