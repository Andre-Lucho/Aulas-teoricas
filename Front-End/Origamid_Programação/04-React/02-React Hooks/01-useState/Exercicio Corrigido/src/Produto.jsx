import React from 'react';

// const Produto = ({ data }) => {
//   const [sell, setSell] = React.useState(
//     '',
//     // data.vendido ? 'Vendido' : 'Não vendido',
//   );

//   React.useEffect(() => {
//     if (data.vendido === false) {
//       setSell('Não vendido');
//     } else {
//       setSell('Vendido');
//     }
//   }, [data]);

//   const { nome, preco, fotos } = data;

//   return (
//     <>
//       <h1>{nome}</h1>
//       <p>R$ {preco} (valor à vista)</p>
//       <p>{sell}</p>
//       <img src={fotos[0].src} alt={fotos[0].titulo} />
//     </>
//   );
// };

// export default Produto;

const Produto = ({ data }) => {
  const [sell, setSell] = React.useState(null);

  React.useEffect(() => {
    if (data) data.vendido === true ? setSell('a') : setSell('Não vendido');
  }, [data]);

  const { nome, preco, fotos } = data;
  console.log(sell);

  return (
    <>
      <h1>{nome}</h1>
      <p>R$ {preco} (valor à vista)</p>
      <p>{sell}</p>
      {fotos && fotos.length > 0 && (
        <img src={fotos[0].src} alt={fotos[0].titulo} />
      )}
    </>
  );
};

export default Produto;
