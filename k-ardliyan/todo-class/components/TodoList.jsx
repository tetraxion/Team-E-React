import React, { Component } from 'react';
import { TodoContext } from '../TodoContext';
import TodoItem from './TodoItem';

class TodoList extends Component {
  static contextType = TodoContext;

  render() {
    const { completed, emptyMessage } = this.props;
    const { todos } = this.context;
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
  }
}

export default TodoList;
