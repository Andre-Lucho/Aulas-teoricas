const Titulo = ({ cor, tagName }) => {
  return (
    <section>
      <h1 style={{ color: cor }}>{tagName}</h1>
    </section>
  );
};

export default Titulo;
