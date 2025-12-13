import { useState } from 'react';
import styles from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Привет, ${name}! Email: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <section className={styles.formContainer}>
      <h3 className={styles.formTitle}>Контактная форма</h3>
      <form onSubmit={handleSubmit} className={styles.inputGroup}>
        <div className={styles.inputGroup}>
          <input
            className={styles.formInput}
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.formInput}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Отправить
        </button>
      </form>
      {name && (
        <p className={styles.greeting}>Приветствуем, {name}!</p>
      )}
    </section>
  );
}
export default Form;
