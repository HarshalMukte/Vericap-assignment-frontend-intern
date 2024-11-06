import React from 'react';
import styles from './skeletonLoader.module.scss';

const SkeletonLoader = ({ width, height }) => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeleton} style={{ width, height }}></div>
    </div>
  );
};

export default SkeletonLoader;
