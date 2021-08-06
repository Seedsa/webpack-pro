import React, { useState } from 'react';
import styles from './index.less';
import img1 from './1.jpg';
const App: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  return (
    <div className={styles.container}>
      HELLO WORD
      <div>{num}</div>
      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          subtract
        </button>
      </div>
      <img src={img1} alt="" />
    </div>
  );
};

export default App;
