import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';
import { 
  NavbarContainer, 
  NavContainer, 
  IconsContainer, 
  Icon 
} from '../styled-components/NavbarStyles';

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
    <NavbarContainer>
      <NavContainer>
        <a>React Shopping</a>
        <IconsContainer>
          {darkTheme ? (
            <Icon as={FaMoon} onClick={handleTheme} />
          ) : (
            <Icon as={GrSun} onClick={handleTheme} />
          )}

          <Icon as={FaShoppingCart} />
        </IconsContainer>
      </NavContainer>
    </NavbarContainer>
  );
};
export default Navbar;
