import React from 'react';
import styles from '../styles/skeleton.module.css';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  return (
    <div 
      className={styles.skeleton} 
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;