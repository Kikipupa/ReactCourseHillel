import React from "react";

import TodosBlock from "./TodosBlock";

import useTodos from "../../hooks/useTodos";

import "./todos.css";

export default function Todos() {
  const todoBlocks = useTodos();

  return (
    <div className="container">
      {todoBlocks.map((item, index) => (
        <TodosBlock
          key={index}
          title={item.title}
          list={item.list}
          btns={item.btns}
        />
      ))}
    </div>
  );
}
