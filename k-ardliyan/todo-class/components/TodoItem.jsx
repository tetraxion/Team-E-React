import React, { Component } from 'react';
import { TodoContext } from '../TodoContext';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: props.todo.text,
      error: '',
    };
  }

  static contextType = TodoContext;

  handleCheckboxChange = () => {
    const { todo } = this.props;
    const { updateTodo } = this.context;
    const now = new Date().toISOString();
    updateTodo({
      ...todo,
      completed: !todo.completed,
      updatedAt: now,
      finishedAt: todo.completed ? null : now,
    });
  };

  handleEditChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.props;
    const { updateTodo } = this.context;
    const { editText } = this.state;
    if (!editText.trim()) {
      this.setState({ error: 'Input tidak boleh kosong' });
      return;
    }
    updateTodo({
      ...todo,
      text: editText.trim(),
      updatedAt: new Date().toISOString(),
    });
    this.setState({ isEditing: false, error: '' });
  };

  handleCancelEdit = () => {
    const { todo } = this.props;
    this.setState({ isEditing: false, editText: todo.text, error: '' });
  };

  formatDate = (date) => {
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

  isSameDate = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getSeconds() === d2.getSeconds();
  };

  render() {
    const { todo } = this.props;
    const { isEditing, editText, error } = this.state;
    const { deleteTodo } = this.context;

    return (
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <form onSubmit={this.handleEditSubmit} className='todo-form-edit'>
            <input
              type='text'
              value={editText}
              onChange={this.handleEditChange}
            />
            {error && <p className='error'>{error}</p>}
            <div className='todo-actions'>
              <button type='submit'>Save</button>
              <button type='button' onClick={this.handleCancelEdit}>
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
                onChange={this.handleCheckboxChange}
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
                  (this.isSameDate(todo.createdAt, todo.updatedAt)
                    ? `Dibuat: ${this.formatDate(todo.createdAt)}`
                    : `Diubah: ${this.formatDate(todo.updatedAt)}`)}
                {todo.completed &&
                  `Selesai: ${this.formatDate(todo.finishedAt)}`}
              </small>
            </div>
            <div className='todo-actions'>
              <button onClick={() => this.setState({ isEditing: true })}>
                Edit
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default TodoItem;
