import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div className={`${styles.footer} ${darkTheme ? styles.darkTheme : ''}`}>
      <p>Copyright - Open Source🐧 - Todos os direitos livres - 2025</p>
    </div>
  );
};

export default Footer;
