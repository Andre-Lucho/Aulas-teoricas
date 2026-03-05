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

const fetchApi01 = async () => {
  const response = await fetch(url);
  const data: Array<Curso> = await response.json();
  if (div && handleType(data)) {
    div.innerHTML = data
      .map(
        (curso) =>
          `
      <h2>${curso.nome}</h2>
      <p>Aulas: ${curso.aulas}</p>
      <p>Horas: ${curso.horas}</p>
      <p>Nível: ${curso.nivel}</p>
      <p>Tags: ${curso.tags.join(', ')}</p>
      <p>ID Aulas: ${curso.idAulas.join(', ')}</p>
      `,
      )
      .join('');
  }
};

const handleType = (data: unknown): data is Curso => {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    'nome' in data[0] &&
    'horas' in data[0] &&
    'tags' in data[0]
  );
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
