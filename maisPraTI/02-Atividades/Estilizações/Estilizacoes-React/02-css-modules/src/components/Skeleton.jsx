import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import styles from '../styles/Skeleton.module.scss';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  const { darkTheme } = useContext(GlobalContext);

  return (
    <div
      className={`${styles.skeleton} ${darkTheme ? styles.darkTheme : ''}`}
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;
