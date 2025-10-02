import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';

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
    <div className="grid-area-[navbar] flex justify-center w-[95%] font-bold mx-auto bg-[#9b1010] text-[#d4d4d4] mt-6 rounded-xl">
      <nav className="flex items-center justify-between w-[80%]">
        <a className="p-2.5">React Shopping</a>
        <div className="h-[100px] flex items-center p-2.5 gap-6">
          {darkTheme ? (
            <FaMoon className="cursor-pointer p-2.5 text-5xl" onClick={handleTheme} />
          ) : (
            <GrSun className="cursor-pointer p-2.5 text-5xl" onClick={handleTheme} />
          )}

          <FaShoppingCart className="cursor-pointer p-2.5 text-5xl" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
