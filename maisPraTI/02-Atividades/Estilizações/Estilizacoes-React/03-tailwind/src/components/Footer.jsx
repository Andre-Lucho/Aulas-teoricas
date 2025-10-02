import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Footer = () => {
  const { darkTheme } = useContext(GlobalContext); // darkTheme é mantido para lógica, mas a estilização vem da classe 'dark' no html
  return (
    <div
      className={`grid-area-footer flex w-[95%] mx-auto mt-0 mb-[1rem] rounded-custom transition-all 
                 duration-200 ease-in-out text-custom-gray bg-primary text-center 
                 shadow-navbar-footer-light dark:shadow-navbar-footer-dark`}
    >
      <p className="m-0 mx-auto p-[20px_0]">
        Copyright - Open Source🐧 - Todos os direitos livres - 2025
      </p>
    </div>
  );
};

export default Footer;
