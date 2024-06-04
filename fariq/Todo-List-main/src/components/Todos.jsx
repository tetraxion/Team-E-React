import React from "react";
import TodoItem from "./Todoitem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted ke component TodoItem
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};
const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
