import React from "react";
import Input from "../Input/Input";

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        Pizza Day
      </a>
      <form>
        <Input type={"text"} placeholder={"Search for the order #"} />
      </form>
    </header>
  );
}

export default Header;
