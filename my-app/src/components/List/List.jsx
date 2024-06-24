import React from "react";

import ListItem from "./ListItem";

export default function List({ list = [], handleActivate, handleDelete }) {
  console.log("List component received:", list);
  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          handleActivate={handleActivate}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  ) : null;
}
