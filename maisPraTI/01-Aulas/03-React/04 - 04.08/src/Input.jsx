import React from 'react';

const Input = ({ id, label, ...props }) => {
  console.log(props);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}></input>
    </>
  );
};

export default Input;
