import React from 'react';

const Button = ({ handleFunction }) => {
  return (
    <>
      <button style={{ margin: '.3rem' }} onClick={handleFunction}>
        Tablet
      </button>
    </>
  );
};

export default Button;
