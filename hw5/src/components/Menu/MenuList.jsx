import React from "react";
import MenuItem from "./MenuItem";

export default function List({ list = [] }) {
  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  ) : null;
}
