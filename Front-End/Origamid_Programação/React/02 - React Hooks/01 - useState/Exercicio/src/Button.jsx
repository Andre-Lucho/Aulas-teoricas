import React from 'react';

const Button = ({ handleFunction, label }) => {
  return (
    <>
      <button style={{ margin: '.3rem' }} onClick={handleFunction}>
        {label}
      </button>
    </>
  );
};

export default Button;
