import React from 'react';
import '../styles/skeleton.scss';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  return (
    <div 
      className="skeleton" 
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;