// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

const url02 = 'https://api.origamid.dev/json/cursos.json';
const div02 = document.querySelector('.div');

interface Curso {
  nome: string;
  aulas: number;
  horas: number;
  nivel: string;
  tags: string[];
  idAulas: number[];
}

const fetchApi02 = async () => {
  const response = await fetch(url02);
  const data: Array<Curso> = await response.json();
  handleCursos(data);
};

function isCurso(curso: unknown): curso is Curso {
  if (
    curso &&
    typeof curso === 'object' &&
    'nome' in curso &&
    'horas' in curso &&
    'tags' in curso
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (div02 && Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      div02.innerHTML += `
      <h2>${item.nome}</h2>
      <p>Aulas: ${item.aulas}</p>
      <p>Horas: ${item.horas}</p>
      <p>Nível: ${item.nivel}</p>
      <p>Tags: ${item.tags.join(', ')}</p>
      <p>ID Aulas: ${item.idAulas.join(', ')}</p>
      `;
    });
  }
}

fetchApi02();
