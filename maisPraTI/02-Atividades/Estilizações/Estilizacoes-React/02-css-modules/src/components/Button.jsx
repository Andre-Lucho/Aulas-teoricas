import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[`btn-${variant}`]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
