import React from 'react';

const Button = ({ tagName, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {tagName}
    </button>
  );
};

export default Button;
