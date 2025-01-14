const Input = ({ id, label, ...props }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
      {/*type="teste" funciona como padrão- caso não passe nenhum como argumento*/}
    </div>
  );
};

export default Input;
