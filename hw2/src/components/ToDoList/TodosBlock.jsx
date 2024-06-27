import React from "react";

import Button from "../Button/Button";

import "./todos.css";

export default function TodosBlock({ title = ``, list = [], btns = [] }) {
  return (
    <div className="todo_container">
      <p className="todo_title">
        {title}: {list.length}
      </p>
      {list.length ? (
        <ul className="todo_list">
          {list.map((item) => (
            <li key={item.id} className={item.priority ? `todo_priority` : ``}>
              {item.title}{" "}
              {btns.map((btn, index) => (
                <Button
                  key={index}
                  title={btn.title}
                  handleClick={() => btn.handleClick(item.id, btn.status)}
                  className={`todo_btn`}
                />
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
