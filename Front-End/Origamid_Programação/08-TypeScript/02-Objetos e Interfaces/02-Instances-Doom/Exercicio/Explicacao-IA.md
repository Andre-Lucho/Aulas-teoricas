## 1. Utility Type Partial<T>

O Partial é o que chamamos de Utility Type (Tipo de Utilidade) no TypeScript. Ele serve para transformar todas as propriedades de um tipo existente em opcionais.

Por que usamos no seu código? A interface original CSSStyleDeclaration (que define o objeto .style do DOM) contém centenas de propriedades (todas as propriedades CSS possíveis: color, backgroundColor, margin, etc.).

Se você tentasse definir o objeto assim:

```typescript
const buttonStyles: CSSStyleDeclaration = {
  backgroundColor: 'blue',
};

//Erro: O TypeScript reclamaria que estão faltando centenas de outras propriedades obrigatórias.
// Ao usar Partial<CSSStyleDeclaration>, você está dizendo ao TypeScript:
```

"Crie um tipo que tenha as mesmas chaves que CSSStyleDeclaration, mas onde eu não sou obrigado a preencher todas elas; posso escolher apenas algumas."

Exemplo simples:

```typescript
interface Carro {
  marca: string;
  modelo: string;
  ano: number;
}
// Sem Partial: erro (faltam propriedades)
const meuCarro: Carro = { marca: 'Ford' };
// Com Partial: funciona!
const meuCarroOpcional: Partial<Carro> = { marca: 'Ford' };
```

## 2 Método Object.assign()

O Object.assign() é um método nativo do JavaScript (não é exclusivo do TS) usado para copiar valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino.

Sintaxe: Object.assign(destino, ...origens)

No seu código:

```typescript
Object.assign(elem.style, buttonStyles);
```

Destino ('elem.style'): É o objeto que será modificado.<br>
Origem ('buttonStyles'): É o objeto que contém os novos valores.
O que ele faz é percorrer cada chave dentro de 'buttonStyles' (ex: padding, border) e dizer ao JavaScript: 'elem.style.padding = buttonStyles.padding', e assim por diante, de forma automática.

### Vantagens:

---

#### Legibilidade: Evita repetir elem.style várias vezes.

#### Performance (sutil): É uma operação única de atribuição em massa.

#### Mutabilidade:<br> Diferente do spread operator ({...style}), o Object.assign modifica o objeto original diretamente. Como o objeto style de um elemento do DOM é uma referência "viva" que não podemos substituir inteira (não podemos fazer elem.style = {}), o assign é a forma perfeita de atualizar suas propriedades internamente.
