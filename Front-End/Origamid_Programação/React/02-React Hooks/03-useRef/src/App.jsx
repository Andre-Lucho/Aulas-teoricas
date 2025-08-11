import React, { useEffect, useRef } from 'react';

const App = () => {
  const query = useRef();

  useEffect(() => {
    const newQuery = query.current;
    console.log(newQuery.className);
  });

  return (
    <div className="nova-classe" ref={query}>
      App01
    </div>
  );
};

export default App;
