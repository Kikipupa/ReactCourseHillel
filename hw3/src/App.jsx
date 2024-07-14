import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterSort from "./components/FilterSort";
import { useTodos } from "./hooks/useTodos";
import "./App.css";

const App = () => {
  const { todos, createTodo, editTodo, removeTodo } = useTodos();
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleFilter = (completed) => {
    setFilteredTodos(todos.filter((todo) => todo.completed === completed));
  };

  const handleSort = () => {
    setFilteredTodos(
      [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo onAdd={createTodo} />
      <FilterSort onFilter={handleFilter} onSort={handleSort} />
      <TodoList todos={filteredTodos} onEdit={editTodo} onDelete={removeTodo} />
    </div>
  );
};

export default App;
