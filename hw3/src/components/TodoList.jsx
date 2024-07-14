import React from "react";
import TodoItem from "./TodoItem/TodoItem.jsx";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TodoList;
