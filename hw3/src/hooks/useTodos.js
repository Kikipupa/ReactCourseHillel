import { useState, useEffect } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoService";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos();
      setTodos(todosData);
    };
    fetchTodos();
  }, []);

  const createTodo = async (title) => {
    const newTodo = { title, completed: false };
    const savedTodo = await addTodo(newTodo);
    setTodos([...todos, savedTodo]);
  };

  const editTodo = async (id, updatedTodo) => {
    const savedTodo = await updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? savedTodo : todo)));
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, createTodo, editTodo, removeTodo };
};
