import React from "react";

import { renderItem } from "./../../utils/render";
import Button from "./../Button/Button";

export default function ListItem({ item, handleActivate, handleDelete }) {
  const itemStyle = item.activated
    ? { color: "green", fontWeight: "bold" }
    : {};
  return (
    <li style={itemStyle}>
      {renderItem(item)}{" "}
      <Button
        title={item.activated ? "Deactivate" : "Activate"}
        handleClick={() => handleActivate(item)}
      />
      <Button title={`Delete`} handleClick={() => handleDelete(item)} />
    </li>
  );
}
