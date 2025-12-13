import { useState, useEffect } from 'react';
import styles from './Users.module.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.slice(0, 5));
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.loading}>Загрузка пользователей...</p>;

  return (
    <section className={styles.usersContainer}>
      <h3 className={styles.usersTitle}>Пользователи (API)</h3>
      <ul className={styles.userList}>
        {users.map(user => (
          <li key={user.id} className={styles.userItem}>
            <h4 className={styles.userName}>{user.name}</h4>
            <p className={styles.userEmail}>{user.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Users;
