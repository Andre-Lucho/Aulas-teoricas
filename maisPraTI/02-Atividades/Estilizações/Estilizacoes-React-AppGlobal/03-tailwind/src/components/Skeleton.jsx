import React from 'react';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  return (
    <div 
      className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded"
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;