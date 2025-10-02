import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  const { darkTheme } = useContext(GlobalContext);

  const skeletonClasses = `
    animate-shimmer
    bg-[length:200%_100%]
    bg-gradient-to-r
    from-light-skeleton-from via-light-skeleton-via to-light-skeleton-to
    dark:from-dark-skeleton-from dark:via-dark-skeleton-via dark:to-dark-skeleton-to
    rounded-[4px]
  `;

  return (
    <div className={skeletonClasses} style={{ width, height, borderRadius }} />
  );
};

export default Skeleton;
