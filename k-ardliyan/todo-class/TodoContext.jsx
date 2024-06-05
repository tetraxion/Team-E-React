import React, { Component, createContext } from 'react';

export const TodoContext = createContext();

class TodoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log('render');
  }

  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  updateTodo = (updatedTodo) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          todos: this.state.todos,
          addTodo: this.addTodo,
          updateTodo: this.updateTodo,
          deleteTodo: this.deleteTodo,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoProvider;
