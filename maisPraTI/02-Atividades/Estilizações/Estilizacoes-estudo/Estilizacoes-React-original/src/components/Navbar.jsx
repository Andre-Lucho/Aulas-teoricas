import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';
import '../styles/navbar.scss';

const Navbar = () => {
  const { setDarkTheme, darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div className="navbar-container">
      <nav className="nav-container">
        <a>React Shopping</a>
        <div className="icons-container">
          {darkTheme ? (
            <FaMoon className="icon" onClick={handleTheme} />
          ) : (
            <GrSun className="icon" onClick={handleTheme} />
          )}

          <FaShoppingCart className="icon" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
