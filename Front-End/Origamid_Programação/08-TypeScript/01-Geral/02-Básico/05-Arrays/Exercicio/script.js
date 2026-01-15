"use strict";
const apiUrl = ' https://api.origamid.dev/json/cursos.json';
const fetchApi = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data) {
            // const apiCursos = await handleData(data);
            showDoom(data);
        }
    }
    catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
};
// iterar sobre os cursos
// const handleData = async (data: Curso[]) => {
//   const cursos = data.map((curso) => curso);
//   console.log(cursos);
//   return cursos;
// };
const showDoom = (cursos) => {
    const section = document.createElement('section');
    section.innerHTML = cursos
        .map((curso) => {
        let color;
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
