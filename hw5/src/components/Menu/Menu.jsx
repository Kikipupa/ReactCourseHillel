import React from "react";
import { pizzas } from "../../data/menuData";
import MenuList from "../Menu/MenuList";

function Menu() {
  return (
    <>
      <MenuList list={pizzas} />
    </>
  );
}

export default Menu;
