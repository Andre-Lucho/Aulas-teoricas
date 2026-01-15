const apiUrl: string = ' https://api.origamid.dev/json/cursos.json';

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  //nivel: string;
  nivel: 'iniciante' | 'avancado';
}

const fetchApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data: Curso[] = await response.json();
    if (data) {
      // const apiCursos = await handleData(data);
      showDoom(data);
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
};

// iterar sobre os cursos
// const handleData = async (data: Curso[]) => {
//   const cursos = data.map((curso) => curso);
//   console.log(cursos);
//   return cursos;
// };

const showDoom = (cursos: Curso[]) => {
  const section: HTMLElement = document.createElement('section');

  section.innerHTML = cursos
    .map((curso) => {
      let color: string;
      curso.nivel === 'iniciante' ? (color = '#4689bf') : (color = 'red');

      return `
    <div style="color: #f6f6f6">
      <h2>Curso: ${curso.nome}</h2>
      <p>Quantidade de hrs: ${curso.horas}</p>
      <p style='text-transform: capitalize'>Aulas: ${curso.tags.join(', ')}</p>
      <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p style="color:${color}">Nível: ${curso.nivel}</p>
    </div>
  `;
    })
    .join('');

  document.body.appendChild(section);
};

fetchApi();
