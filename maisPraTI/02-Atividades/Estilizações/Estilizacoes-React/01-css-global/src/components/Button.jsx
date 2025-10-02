import React from 'react';
import '../styles/button.scss';

const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;