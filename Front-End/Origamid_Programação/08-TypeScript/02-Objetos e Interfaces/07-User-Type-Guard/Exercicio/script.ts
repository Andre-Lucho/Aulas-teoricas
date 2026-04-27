// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

const url = 'https://api.origamid.dev/json/cursos.json';
const div = document.querySelector('.div');

interface Curso {
  nome: string;
  aulas: number;
  horas: number;
  nivel: string;
  tags: string[];
  idAulas: number[];
}

function handleCurso(data: unknown) {
  if (div && Array.isArray(data)) {
    data
      .filter((curso) => handleType(curso))
      .map(
        (curso) =>
          (div.innerHTML += `<h2>${curso.nome}</h2>
            <p>Aulas: ${curso.aulas}</p>
            <p>Horas: ${curso.horas}</p>
            <p>Nível: ${curso.nivel}</p>
            <p>Tags: ${curso.tags.join(', ')}</p>
            <p>ID Aulas: ${curso.idAulas.join(', ')}</p>`),
      );
  }
}

const fetchApi01 = async () => {
  const response = await fetch(url);
  const data: Curso[] = await response.json();
  // console.log(data);
  handleCurso(data);
};

const handleType = (data: unknown): data is Curso => {
  if (
    data &&
    typeof data === 'object' &&
    'nome' in data &&
    'horas' in data &&
    'tags' in data
  ) {
    return true;
  } else {
    return false;
  }
};

/* 
1. Aqui, handleType retorna 'true' se Curso for encontrado. Caso contrário, retorna 'false'.
Se retornar 'true', o código dentro do 'if' será executado.

2. A lógica de renderizar o HTML sai do Type Guard (está em 'fetchApi'), porque 'handleType' deve apenas verificar o tipo, não ter efeitos colaterais.
O div fica fora, e você usa o Type Guard separadamente

** Um Type Guard é puro: ele só valida e retorna true ou false. 
A lógica de negócio (renderizar HTML) fica na função que o chama.
*/

fetchApi01();

/* 
TENTATIVA 01:
const fetchApi = async () => {
  const response = await fetch(url);
  const json = await response.json();
  handleCurso(json);
};

const handleCurso = (data: unknown): data is Curso => {
  if (div && Array.isArray(data) && data.length > 0 && 'nome' in data[0]) {
    document.documentElement.innerHTML = `
      <div>Teste</div>
    `;
  }

};
Não está retornando NADA! Tampouco True ou False!!! --> temos um Type Predicate!

*/
