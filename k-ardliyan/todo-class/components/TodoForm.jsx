import React, { Component } from 'react';
import { TodoContext } from '../TodoContext';

class TodoForm extends Component {
  static contextType = TodoContext;

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      error: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.context;
    const { input } = this.state;
    if (!input.trim()) {
      this.setState({ error: 'Todo tidak boleh kosong!' });
      return;
    }
    addTodo({
      id: Date.now(),
      text: input.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    this.setState({ input: '', error: '' });
  };

  render() {
    const { input, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='todo-form'>
        <input
          type='text'
          value={input}
          onChange={(e) => this.setState({ input: e.target.value })}
          placeholder='Add a todo'
        />
        {error && <p className='error'>{error}</p>}
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
