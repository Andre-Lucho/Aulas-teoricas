import React from 'react';

const Button = ({ variant = 'solid', children, ...props }) => {
  const baseClasses = "cursor-pointer px-4 py-2 border-none rounded font-bold transition-all duration-200 ease-in-out";
  
  const variantClasses = {
    solid: "bg-[#9b1010] text-white hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]",
    outline: "bg-transparent text-[#9b1010] border-2 border-[#9b1010] hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]",
    ghost: "bg-transparent text-[#9b1010] border-none hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
  };
  
  const focusClasses = "focus:outline-2 focus:outline-[#007bff] focus:outline-offset-2";
  const disabledClasses = "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${focusClasses} ${disabledClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;