import React from 'react';

const Button = ({ variant = 'solid', children, ...props }) => {
  const baseClasses = `
    mt-4 mb-0 mx-auto max-w-[8rem] py-[0.75rem] px-[1.5rem] rounded-[4px] font-bold cursor-pointer
    flex items-center justify-center text-sm
    transition-all duration-200 ease-in-out
    hover:-translate-y-[2px] hover:shadow-button-hover
    focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
  `;

  const variantClasses = {
    solid: `
      bg-primary text-white border-2 border-transparent shadow-button
      hover:bg-[#9a2e22]
    `,
    outline: `
      bg-transparent text-primary border-2 border-primary shadow-button
      hover:bg-primary hover:text-white
    `,
    ghost: `
      bg-transparent text-primary border-2 border-transparent shadow-button
      hover:bg-primary hover:text-white
    `,
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
