import React, { Component } from 'react';
import TodoProvider from './TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

/**
 * ✨
 * Link to the demo:
 * [Todo App React](https://todo-react.k-ardliyan.my.id/)
 */

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <div className='app'>
          <h1>Todo App</h1>
          <a
            href='https://github.com/k-ardliyan/todo-app-react'
            className='text-muted'
          >
            @k-ardliyan
          </a>
          <div className='card'>
            <TodoForm />
          </div>
          <div className='todo-columns'>
            <div className='card'>
              <h2>Todo List</h2>
              <TodoList completed={false} emptyMessage='Tidak ada todo' />
            </div>
            <div className='card'>
              <h2>Completed Todos</h2>
              <TodoList
                completed={true}
                emptyMessage='Tidak ada todo yang selesai'
              />
            </div>
          </div>
        </div>
      </TodoProvider>
    );
  }
}

export default App;
