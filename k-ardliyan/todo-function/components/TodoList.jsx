import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoList = ({ completed, emptyMessage }) => {
  const { todos } = useContext(TodoContext);
  const filteredTodos = todos.filter((todo) => todo.completed === completed);

  if (filteredTodos.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  return (
    <div className='todo-list'>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
