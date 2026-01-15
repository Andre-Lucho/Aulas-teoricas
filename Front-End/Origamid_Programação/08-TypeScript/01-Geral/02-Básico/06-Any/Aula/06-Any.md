# Any

### O any indica que o dado pode conter qualquer tipo de dado do TypeScript.<br> Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.

```
function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

normalizar(' DeSIGN');
normalizar(200);

```

## Any Implicito

### Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo.<br> Esses parâmetros terão o tipo implícito de any.

```
function normalizar(texto) {
  return texto.trim().toLowerCase();
}


ts.config.json:
---------------
{
  "compilerOptions": {
    "target": "ESNext",
    "strict": true,
    "noImplicitAny": true // já é padrão --> retornar erro em qquer any
  }
}
```

## Uso do Any

### Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.

```
async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON('https://api.origamid.dev/json/cursos.json');



Exercicio anterior - 05-Arrays
------------------------------
const fetchApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data: Curso[] = await response.json(); **
    if (data) {
      // const apiCursos = await handleData(data);
      showDoom(data);
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
};

** aqui, eu sei que o retorno é uma Array.... mas seu eu tirar a tipagem da interface(Curso[]), não dá erro, pois o TS não consulta a API para ver o retorno

```

## Any e Erros

### Usar o any pode quebrar a sua aplicação.

```
interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  });
}

const dados: any = 'o any gera problemas';

mostrarCursos(dados);


```
