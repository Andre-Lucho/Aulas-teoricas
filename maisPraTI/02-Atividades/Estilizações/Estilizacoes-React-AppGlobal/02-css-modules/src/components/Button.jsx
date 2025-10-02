import React from 'react';
import styles from '../styles/button.module.css';

const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[`btn-${variant}`]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;