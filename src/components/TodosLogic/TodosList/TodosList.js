import './TodosList.css';
import TodosItem from './TodoItem/TodoItem';

function TodosList(props) {
  const { todos, setTodos, saveToLocalStorage } = props;
  return (
    <ul className="todos-list">
      {todos.length
        ? (todos.map((todo) => (
          <TodosItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            saveToLocalStorage={saveToLocalStorage}
          />
        )))
        : (<li>No Todos to display yet</li>)}

    </ul>
  );
}

export default TodosList;
