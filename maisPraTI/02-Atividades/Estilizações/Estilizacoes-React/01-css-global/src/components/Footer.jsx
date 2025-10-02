import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import '../styles/footer.scss';

const Footer = () => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div className={`footer ${darkTheme ? 'dark-theme' : ''}`}>
      <p>Copyright - Open Source🐧 - Todos os direitos livres - 2025</p>
    </div>
  );
};

export default Footer;
