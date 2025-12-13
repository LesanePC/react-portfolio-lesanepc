import { useState } from 'react';
import styles from './Main.module.css';

function Main() {
  const [count, setCount] = useState(0);

  return (
    <main style={{padding: '20px'}}>
      <h2>Frontend Developer</h2>
      <p className={styles.countDisplay}>
        Счетчик проектов: <strong>{count}</strong>
      </p>
      <div className={styles.counter}>
        <button 
          className={styles.addBtn}
          onClick={() => setCount(count + 1)}
        >
          + Проект
        </button>
        <button 
          className={styles.resetBtn}
          onClick={() => setCount(0)}
        >
          Сброс
        </button>
      </div>
    </main>
  );
}
export default Main;

