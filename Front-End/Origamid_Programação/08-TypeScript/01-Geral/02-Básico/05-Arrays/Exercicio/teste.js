// let tags = ['1', '2', '3'];

// function counter() {
//   let newArray = [];
//   for (let index = 0; index < tags.length; index++) {
//     newArray.push(tags[index]);
//   }
//   return newArray;
// }

// // console.log(counter());

// let a = tags.map((element) => {
//   return element;
// });

// // console.log(a);

const apiUrl = ' https://api.origamid.dev/json/cursos.json';

const fetchApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const cursos = handleData(data);
    return data;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
};

const handleData = async (data) => {
  const cursos = data.map((curso) => curso.tags);
  console.log(cursos);
  return cursos;
};

fetchApi();
