import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [error, setError] = useState('');
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const handleCheckboxChange = () => {
    const now = new Date().toISOString();
    updateTodo({
      ...todo,
      completed: !todo.completed,
      updatedAt: now,
      finishedAt: todo.completed ? null : now,
    });
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editText.trim()) {
      setError('Input tidak boleh kosong');
      return;
    }
    updateTodo({
      ...todo,
      text: editText.trim(),
      updatedAt: new Date().toISOString(),
    });
    setIsEditing(false);
    setError('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setError('');
  };

  const formatDate = (date) => {
    return new Date(date)
      .toLocaleString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
      .replace(',', '');
  };

  const isSameDate = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getSeconds() === d2.getSeconds();
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className='todo-form-edit'>
          <input type='text' value={editText} onChange={handleEditChange} />
          {error && <p className='error'>{error}</p>}
          <div className='todo-actions'>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div>
            <input
              type='checkbox'
              id={`checkbox-${todo.id}`}
              checked={todo.completed}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor={`checkbox-${todo.id}`}
              className='custom-checkbox'
            ></label>
          </div>
          <div className='todo-content'>
            <span>{todo.text}</span>
            <small>
              {!todo.completed &&
                (isSameDate(todo.createdAt, todo.updatedAt)
                  ? `Dibuat: ${formatDate(todo.createdAt)}`
                  : `Diubah: ${formatDate(todo.updatedAt)}`)}
              {todo.completed && `Selesai: ${formatDate(todo.finishedAt)}`}
            </small>
          </div>
          <div className='todo-actions'>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
