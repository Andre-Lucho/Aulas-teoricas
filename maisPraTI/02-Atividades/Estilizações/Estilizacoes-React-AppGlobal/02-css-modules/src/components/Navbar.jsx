import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';
import styles from '../styles/navbar.module.css';

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
    <div className={styles.navbarContainer}>
      <nav className={styles.navContainer}>
        <a>React Shopping</a>
        <div className={styles.iconsContainer}>
          {darkTheme ? (
            <FaMoon className={styles.icon} onClick={handleTheme} />
          ) : (
            <GrSun className={styles.icon} onClick={handleTheme} />
          )}

          <FaShoppingCart className={styles.icon} />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
