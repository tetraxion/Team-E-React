import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleCompleted={toggleCompleted} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </div>
  );
};

export default Todos;
