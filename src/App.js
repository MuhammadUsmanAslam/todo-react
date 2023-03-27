import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import TodosLogic from './components/TodosLogic/TodosLogic';

function App() {
  const [todos, setTodos] = useState([]);

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    const todosFromlocalStorage = localStorage.getItem('todos');
    const arr = JSON.parse(todosFromlocalStorage);
    if (arr) {
      setTodos([...arr]);
    }
  }, []);

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="app">
      <Header />
      <TodosLogic todos={todos} setTodos={setTodos} saveToLocalStorage={saveToLocalStorage} />
    </div>
  );
}

export default App;
