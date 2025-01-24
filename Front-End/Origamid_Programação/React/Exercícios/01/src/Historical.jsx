import React from 'react';
import PropTypes from 'prop-types';

const Historical = ({ historical }) => {
  return (
    <>
      <ul>
        {historical &&
          historical.map((number, i) => {
            return <li key={i}>{number}</li>;
          })}
      </ul>
      <p>[{historical.join(',')}]</p>
    </>
  );
};

Historical.propTypes = {
  historical: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Historical;

/*
o ESLint espera que você defina quais tipos de dados são esperados para as props que o componente Historical recebe. Isso é uma prática comum para garantir a integridade e a robustez do seu código React. 
Para isso, você pode utilizar o PropTypes, que é uma biblioteca que permite definir os tipos de dados esperados para as props de um componente.

Após a instalação da biblioteca:

import PropTypes from 'prop-types';

final do código:
Historical.propTypes = {
  historical: PropTypes.arrayOf(PropTypes.number).isRequired, */
