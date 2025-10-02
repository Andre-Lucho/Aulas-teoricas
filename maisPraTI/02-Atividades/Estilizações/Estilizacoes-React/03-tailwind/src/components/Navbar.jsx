import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';

const Navbar = () => {
  const { setDarkTheme, darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div
      className="grid-area-navbar flex justify-center w-[95%] text-[1.5rem] font-bold mx-auto mt-[1.5rem] mb-0 bg-primary text-custom-gray rounded-custom transition-all duration-200 ease-in-out shadow-navbar-footer-light dark:shadow-navbar-footer-dark"
    >
      <nav className="flex items-center justify-between w-4/5">
        <a className="p-[10px]">+PraTI - Shopping</a>
        <div className="h-[100px] flex items-center p-[10px] gap-[25px]">
          {darkTheme ? (
            <FaMoon
              className="cursor-pointer p-[10px] text-[2.8rem]"
              onClick={handleTheme}
            />
          ) : (
            <GrSun
              className="cursor-pointer p-[10px] text-[2.8rem]"
              onClick={handleTheme}
            />
          )}
          <FaShoppingCart className="cursor-pointer p-[10px] text-[2.8rem]" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
