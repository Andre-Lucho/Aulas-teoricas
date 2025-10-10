import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Li os termos.
        </label>
      </form>
      {termos && <p>Os termos foram aceitos</p>}
    </div>
  );
};

export default App;
