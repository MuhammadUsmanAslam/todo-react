import { useEffect, useState } from 'react';
import TodosLogic from '../TodosLogic/TodosLogic';

function Home() {
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

  return (<TodosLogic todos={todos} setTodos={setTodos} saveToLocalStorage={saveToLocalStorage} />
  );
}

export default Home;
