import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import '../styles/skeleton.scss';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  const { darkTheme } = useContext(GlobalContext);

  return (
    <div
      className={`skeleton ${darkTheme ? 'dark-theme' : ''}`}
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;