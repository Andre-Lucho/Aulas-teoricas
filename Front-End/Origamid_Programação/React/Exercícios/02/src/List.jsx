import React from 'react';

const List = (task) => {
  return (
    <div className="list">
      <ul>
        {task.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
