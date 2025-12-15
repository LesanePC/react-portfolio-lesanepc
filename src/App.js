import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Repos from './components/Repos';
import Todo from './components/Todo';
import Form from './components/Form';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <div className="card">
        <Main />
        <Repos />
        <Todo />
        <Form />
      </div>
    </div>
  );
}

  
export default App;
