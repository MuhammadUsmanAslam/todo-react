import { useState } from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const {
    todo, todos, setTodos, saveToLocalStorage,
  } = props;
  const [showElements, setShowElements] = useState(true);
  const [updatedTodo, setUpdatedTodo] = useState('');

  const markCompleted = (e) => {
    todo.completed = !todo.completed;
    const newTodos = todos.filter((innerTodo) => {
      if (innerTodo.id === e.target.id) {
        return todo;
      }
      return innerTodo;
    });
    setTodos([...newTodos]);
    saveToLocalStorage();
  };

  const deleteTodo = (e) => {
    // eslint-disable-next-line
    const newTodos = todos.filter((todoToBeDeleted) => todoToBeDeleted.id !== parseInt(e.target.id));
    newTodos.forEach((newTodoItem, index) => {
      // eslint-disable-next-line
      newTodoItem.id = index;
    });
    setTodos([...newTodos]);
    saveToLocalStorage();
  };

  const showEditTodo = () => {
    setShowElements(!showElements);
  };

  return (

    showElements
      ? (
        <li className="todo-item">
          <div className="todo-item__left">
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={(e) => { markCompleted(e); }}
            />
            <p>{todo.todo}</p>
          </div>
          <div className="todo-item__right">
            <button
              type="submit"
              onClick={(e) => {
                showEditTodo(e);
                setUpdatedTodo(todo.todo);
              }}
            >
              Edit
            </button>
            <button type="submit" id={todo.id} onClick={(e) => { deleteTodo(e); }}>Delete</button>
          </div>
        </li>
      ) : (
        <li className="todo-item">
          <div className="todo-item__edit">
            <input
              className="todo-edit-input"
              onChange={(e) => {
                setUpdatedTodo(e.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  if (event.target.value) {
                    const updatedTodos = todos.filter((todoToChange) => {
                      if (todoToChange.id === todo.id) {
                        // todoToChange.todo = event.target.value;
                        const obj = {
                          todo: event.target.value,
                          id: todoToChange.id,
                          completed: todoToChange.completed,
                        };

                        return obj;
                        // return {
                        //   todo: event.target.value,
                        //   id: todoToChange.id,
                        //   completed: todoToChange.completed,
                        // };
                        //
                        // console.log(todoToChange);
                        // const obj = {
                        //   todo: event.target.value,
                        //   id: todoToChange.id,
                        //   completed: todoToChange.completed
                        // }
                        // console.log(obj);
                        // return obj;
                        //
                      }
                      return todo;
                    });
                    setTodos([...updatedTodos]);
                    saveToLocalStorage();
                  }
                  setShowElements(!showElements);
                }
              }}
              placeholder="Add your todo here"
              value={updatedTodo}
            />
          </div>
        </li>
      )
  );
}

export default TodoItem;
