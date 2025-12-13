import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Users from './components/Users';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card">
        <Main />
        <Form />
        <Users />
        <Todo />
      </div>
    </div>
  );
}

  
export default App;
