import React from "react";
import { Link } from "react-router-dom";
import MenuList from "../Menu/MenuList";

function Menu() {
  return (
    <>
      <nav>
        <Link to="/cart">Go to Cart</Link>
      </nav>
      <MenuList />
    </>
  );
}

export default Menu;
