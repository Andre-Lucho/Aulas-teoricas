import React from 'react';
import InputTag from './InputTag';

const List = () => {
  return (
    <div className="list">
      <ul>
        {variavel.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
