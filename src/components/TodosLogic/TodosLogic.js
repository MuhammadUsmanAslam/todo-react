import './TodosLogic.css';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import TodosList from './TodosList/TodosList';

function TodosLogic(props) {
  const { todos, setTodos, saveToLocalStorage } = props;
  const [todo, setTodo] = useState('');

  TodosLogic.propTypes = {
    saveToLocalStorage: PropTypes.func.isRequired,
    setTodos: PropTypes.func.isRequired,
  };

  const addNewTodo = (value) => {
    const newTodo = {
      id: todos.length,
      todo: value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    saveToLocalStorage();
  };

  return (
    <div className="todos-logic">
      <div className="todos-logic__input-section">
        <input
          placeholder="Add your todo here"
          value={todo}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              if (todo) {
                addNewTodo(todo);
                setTodo('');
              }
            }
          }}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <FaPlus
          className="add-todo__btn"
          onClick={() => {
            if (todo) {
              addNewTodo(todo);
              setTodo('');
            }
          }}
        />
      </div>
      <TodosList todos={todos} setTodos={setTodos} saveToLocalStorage={saveToLocalStorage} />
    </div>
  );
}

export default TodosLogic;
