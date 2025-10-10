import React from 'react';
import PropTypes from 'prop-types';

const Historical = ({ dataList }) => {
  // if (dataList == null) return null;
  return (
    <div>
      <h2>Histórico:</h2>
      <ul>
        {dataList && dataList.map((numero, i) => <li key={i}>{numero}</li>)}
      </ul>
    </div>
  );
};

Historical.propTypes = {
  historical: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Historical;
