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
      setTodos(todosData.slice(0, 10));
    };
    fetchTodos();
  }, []);

  const createTodo = async (title) => {
    const newTodo = { title, completed: false };
    const savedTodo = await addTodo(newTodo);
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...savedTodo, id: prevTodos.length + 1 },
    ]);
  };

  const editTodo = async (id, updatedTodo) => {
    const savedTodo = await updateTodo(id, updatedTodo);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? savedTodo : todo))
    );
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, createTodo, editTodo, removeTodo };
};
