import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Todo tidak boleh kosong!');
      return;
    }
    const now = new Date().toISOString();
    addTodo({
      id: Date.now(),
      text: input.trim(),
      completed: false,
      createdAt: now,
      updatedAt: now,
      finishedAt: null,
    });
    setInput('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new todo'
      />
      <button type='submit'>Add Todo</button>
      {error && <p className='error'>{error}</p>}
    </form>
  );
};

export default TodoForm;
