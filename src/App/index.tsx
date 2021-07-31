import React from 'react';
import styles from './index.less';
import img1 from './1.jpg';
const index = () => {
  return (
    <div className={styles.container}>
      HELLO WORLD
      <img src={img1} alt="" />
    </div>
  );
};

export default index;
