import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const { setDarkTheme, darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('darkTheme');
    } else {
      document.body.classList.remove('darkTheme');
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div
      className={`${styles.navbarContainer} ${
        darkTheme ? styles.darkTheme : ''
      }`}
    >
      <nav className={styles.navContainer}>
        <a>+PraTI - Shopping</a>
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
