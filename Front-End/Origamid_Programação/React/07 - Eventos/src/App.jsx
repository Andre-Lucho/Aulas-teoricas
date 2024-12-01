const App = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div style={{ height: '200vw' }}>Div</div>;
    </>
  );
};

export default App;
