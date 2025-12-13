import { useState, useEffect } from 'react';
import styles from './Todo.module.css';  // создадим ниже

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Загрузка из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('eugene-todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('eugene-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        done: false 
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <section className={styles.todoContainer}>
      <h3 className={styles.todoTitle}>📝 Todo-лист</h3>
      <div className={styles.inputContainer}>
        <input 
          className={styles.todoInput}
          value={input} 
          onChange={e => setInput(e.target.value)}
          placeholder="Что нужно сделать?"
          onKeyPress={e => e.key === 'Enter' && addTodo()}
        />
        <button className={styles.addBtn} onClick={addTodo}>
          Добавить
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={`${styles.todoItem} ${todo.done ? styles.done : ''}`}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button 
              className={styles.deleteBtn}
              onClick={() => deleteTodo(todo.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p className={styles.empty}>Задачи появятся здесь...</p>
      )}
    </section>
  );
}
export default Todo;
